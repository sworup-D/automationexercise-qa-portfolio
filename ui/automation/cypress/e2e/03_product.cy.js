/// <reference types="cypress" />

describe('Product Module', () => {
  beforeEach(() => {
    cy.visit('/products');
    cy.fixture('productData').as('product');
  });
  it('TC_015 - View product categories and brands', () => {
  cy.visit('/');
  cy.contains('Products').click();

  // --- Categories ---
  cy.get('.panel-group.category-products .panel .panel-body a').each(($link) => {
  const name = $link.text().trim();
  const href = $link.prop('href');

  cy.visit(href); // Cypress queues this visit
  cy.get('.features_items').should('be.visible');
  cy.log(`✅ Category page loaded for: ${name}`);
});

// Brands
cy.get('.brands-name a').each(($link) => {
  const name = $link.text().trim();
  const href = $link.prop('href');

  cy.visit(href);
  cy.get('.features_items').should('be.visible');
  cy.log(`✅ Brand page loaded for: ${name}`);
});
})


  it('TC_016 - View detailed information of individual product', () => {
    cy.contains('View Product').click();
    cy.url().should('include', '/product_details');
    cy.get('.product-information').should('be.visible');
  });
    
  it('TC_017 - Filter products by category and brand', function () {
    cy.contains('Brands').scrollIntoView();
    cy.contains('Kookie Kids').click();
    cy.get('.features_items').should('contain.text', 'Kookie Kids');
  });

  it('TC_018 - Search products by name', function () {
    cy.searchProduct(this.product.validSearch);
    cy.contains('Searched Products').should('be.visible');
    cy.get('.features_items').should('contain.text', this.product.validSearch);
  });

  it('TC_019 - Search with special characters', function () {
  cy.searchProduct(this.product.specialChars);
  cy.get('.features_items .productinfo').should('not.exist');
  });

  it('TC_021 - Search with numeric input', function () {
    cy.searchProduct(this.product.numericInput);
    cy.get('.features_items .productinfo').should('not.exist');
  });

});
