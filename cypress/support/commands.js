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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('openWebsite', () => {
    
    cy.fixture('config')
      .then((config) => {
      var url = config.url
      cy.visit(url)   
    })

  Cypress.Commands.add('registration', (email,username,password) => {

    
    cy.get('[id="join_neu_email_field"]')
      .type(email)
      
    cy.get('[id="join_neu_first_name_field"]')
      .type(username)
      
    cy.get('[id="join_neu_password_field"]')
      .type(password)  


    cy.get('[name="submit_attempt"]')  
      .click()

 
    cy.get('[aria-label="Your account"]')
      .click()
   
    cy.get('[class="details"]')
      .find('p') 
      .eq(0)
      .should('contain',username) 
      
      })  
})
