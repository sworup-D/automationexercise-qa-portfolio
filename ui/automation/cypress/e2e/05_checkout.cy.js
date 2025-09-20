/// <reference types="cypress" />

describe('Checkout Module ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // TC_028: Guest checkout
  it.skip('TC_028: Attempted Checkout as a guest', () => {
    cy.contains('Blue Top').parents('.product-image-wrapper')
      .trigger('mouseenter')
      .within(() => {
        cy.contains('Add to cart').should('be.visible').click();
      });
    cy.contains('a', 'View Cart').click();
    cy.get('a.check_out').click();
    cy.contains('Checkout').should('be.visible');
;
});

  // TC_031 + TC_032: Successful checkout and Invoice Download
  it('TC_031+ TC_32: Checkout with valid details and Download Invoice', () => {
    cy.visit('/login')
  cy.fixture('paymentData').then((data) => {
    cy.get('[data-qa="login-email"]').type(data.validUser.email);
    cy.get('[data-qa="login-password"]').type(data.validUser.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains(`Logged in as ${data.validUser.name}`).should('be.visible');
    cy.contains('Blue Top').parents('.product-image-wrapper')
      .trigger('mouseenter')
      .within(() => {
        cy.contains('Add to cart').should('be.visible').click();
      });
    cy.contains('a', 'View Cart').click();
    cy.get('a.check_out').click();
    cy.contains('Checkout').should('be.visible');
    cy.contains('Place Order').should('be.visible').click();
    cy.get('[data-qa="name-on-card"]').type(data.validUser.name);
    cy.get('[data-qa="card-number"]').type(data.cardDetail.cardNumber);
    cy.get('[data-qa="cvc"]').type(data.cardDetail.cvc);
    cy.get('[data-qa="expiry-month"]').type(data.cardDetail.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(data.cardDetail.expiryYear);
    cy.get('[data-qa="pay-button"]').click();

    cy.contains('Order Placed').should('be.visible');
    cy.contains('Download Invoice').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.contains('Logout').click();
   
    
  });
});
  });

