// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('signup', (user) => {
  cy.visit('/login');
  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('#id_gender1').check(); // Mr.
  cy.get('#password').type(user.password);

  cy.get('#days').select(user.dob.day);
  cy.get('#months').select(user.dob.month);
  cy.get('#years').select(user.dob.year);

  cy.get('#first_name').type(user.firstname);
  cy.get('#last_name').type(user.lastname);
  cy.get('#company').type(user.company);
  cy.get('#address1').type(user.address1);
  cy.get('#address2').type(user.address2);
  cy.get('#country').select(user.country);
  cy.get('#state').type(user.state);
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zipcode);
  cy.get('#mobile_number').type(user.mobile);

  cy.get('button[data-qa="create-account"]').click();
});

Cypress.Commands.add('login', (email,password) => {
  cy.visit('/login')
  if (email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  if (password) {
    cy.get('[data-qa="login-password"]').type(password);
  }

  cy.get('[data-qa="login-button"]').click()
});
Cypress.Commands.add('logout', () => {
  cy.get('a[href="/logout"]').click();
  cy.url().should('include', '/login');
});


Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[name="search"]').clear().type(productName);
  cy.get('#submit_search').click();
});

Cypress.Commands.add('filterByCategory', (categoryName) => {
  cy.contains('Categories').scrollIntoView();
  cy.contains(categoryName).click();
});

Cypress.Commands.add('filterByBrand', (brandName) => {
  cy.contains('Brands').scrollIntoView();
  cy.contains(brandName).click();
});


