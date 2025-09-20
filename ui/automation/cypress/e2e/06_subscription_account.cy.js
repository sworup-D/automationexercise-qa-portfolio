/// <reference types="cypress" />

describe('Portfolio: Contact, Subscription, Delete Account', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // TC_033: Submit Contact Form with Valid Info
  it('TC_033: Submit Contact Form', () => {
    cy.fixture('formData').then((data) => {
      cy.contains('Contact us').click();

      cy.get('[data-qa="name"]').type(data.contactForm.name);
      cy.get('[data-qa="email"]').type(data.contactForm.email);
      cy.get('[data-qa="subject"]').type(data.contactForm.subject);
      cy.get('[data-qa="message"]').type(data.contactForm.message);
      cy.get('[data-qa="submit-button"]').click();

      cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    });
  });

  // TC_035: Subscribe with Valid Email
  it('TC_035: Subscribe with Valid Email', () => {
    cy.fixture('formData').then((data) => {
      cy.get('#susbscribe_email').type(data.contactForm.email);
      cy.get('#subscribe').click();

      cy.contains('You have been successfully subscribed!').should('be.visible');
    });
  });

  it('TC_041: Delete Account', () => {
    cy.fixture('signupData').then((data) => {
      // Generate a unique email
      const uniqueEmail = `tempuser+${Date.now()}@gmail.com`;
      // Create a user object
      const user = { ...data.valid, email: uniqueEmail };
      // 1️⃣ Signup using custom command
      cy.signup(user);
      cy.get('[data-qa="continue-button"]').click();
      
      // 3️⃣ Delete account
      cy.contains('Delete Account').click();
      cy.contains('Account Deleted!').should('be.visible');
      cy.visit('/login');
      cy.login(user.email, user.password); // Use the same user object
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });})
  });

