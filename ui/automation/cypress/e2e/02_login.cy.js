describe('Login Module',() => {
  beforeEach('Open the site homepage',() =>{
    cy.visit('/login');
    cy.fixture('signupData').as('data');
  });
it('TC_005 - Login with valid credentials', function () {
  cy.login(this.data.valid.email,this.data.valid.password);
  cy.contains(`Logged in as ${this.data.valid.name}`).should('be.visible');
  });
it('TC_006 - Login with invalid email', function () {
  cy.login(this.data.invalidLogin.email,this.data.invalidLogin.password);
  cy.contains('Your email or password is incorrect!').should('be.visible');
  });
it('TC_007 - Login with invalid password', function () {
  cy.login(this.data.invalidPassword.email,this.data.invalidPassword.password);
  cy.contains('Your email or password is incorrect!').should('be.visible');
  });
it('TC_008 - Login with empty fields', function () {
  cy.get('[data-qa="login-button"]').click();
  cy.get('input[data-qa="login-email"]')
    .then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });
it('TC_009 - Login with password only', function () {
  cy.login('',this.data.valid.password);
  cy.get('input[data-qa="login-email"]')
    .then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });
it('TC_010 - Login with email only', function () {
  cy.login(this.data.valid.email,'');
  cy.get('input[data-qa="login-password"]')
    .then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });
it('TC_013 - Logout functionity', function () {
  cy.login(this.data.valid.email,this.data.valid.password);
  cy.logout();
  })


})

