describe('Add to Cart Module',() => {
   beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  });
it('TC_022: Add product to cart from homepage (guest or logged-in)', () => {
    cy.contains('Blue Top').parents('.product-image-wrapper')
      .trigger('mouseenter')
      .within(() => {
        cy.contains('Add to cart').should('be.visible').click();
      });
    cy.contains('Added!').should('be.visible');
  });
it('TC_024 - Remove products from cart', () => {
    cy.visit('/product_details/1')
    cy.get(':nth-child(5) > .btn').click();
    cy.get('.modal-footer > .btn').click();//contine shopping button

    cy.visit('/product_details/2')
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.get('#product-2 > .cart_delete > .cart_quantity_delete').click();
    cy.get('.cart_info').should('not.contain', 'Men Tshirt');
  });

it('TC_026 - Update product quantity from product detail page', () => {
    cy.visit('/product_details/1');
    cy.get('#quantity').clear().type('2');
    
});
it('TC_027 - Update same product quantity twice and check quntity', () => {
    cy.visit('/product_details/1');
    cy.get('#quantity').clear().type('1');
    cy.contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
    cy.get('#quantity').clear().type('2');
    cy.contains('Add to cart').click();
    cy.get('u').click();
    cy.get('.cart_quantity').contains('3');
});  
  
})


