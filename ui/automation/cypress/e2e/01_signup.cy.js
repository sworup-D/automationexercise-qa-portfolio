

describe('Signup Module',() => {
  beforeEach('Open the site homepage',() =>{
    cy.visit('/');
    cy.fixture('signupData').as('data');
  });

  it('TC_001 - Signup with valid user detail', function () {
  const uniqueEmail = `rocky1+${Date.now()}@gmail.com`;
  this.data.valid.email = uniqueEmail; // now it's a real string
  cy.signup(this.data.valid);
  cy.url().should('include', '/account_created');
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();

  });

  it('TC_002 - Signup with already registered email', function () {
  const registeredEmail = this.data.alreadyRegisteredEmail;
  const user = {
    name: this.data.valid.name,
    email: registeredEmail
  };
  cy.visit('/login');
  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();
  cy.contains('Email Address already exist!').should('be.visible');
  });

  it('TC_003 - Signup with empty required fields', function () {
  cy.visit('/login');
  cy.get('button[data-qa="signup-button"]').click();
  cy.get('input[data-qa="signup-name"]')
    .then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('TC_004 - Signup with missing @ in the email', function () {
  const registeredEmail = this.data.invalidEmail;
  const user = {
    name: this.data.valid.name,
    email: registeredEmail
  };
  cy.visit('/login');
  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();
  cy.get('input[data-qa="signup-email"]')
    .then(($input) => {
      expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'rocky1gmail.com' is missing an '@'.");
    });
  });
});


