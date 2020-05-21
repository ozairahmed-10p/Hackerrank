describe('Multiple Login Scenarios', () => {
    beforeEach(() => {
        //Code handle in command.js      
        cy.openWebsite()  
    })
    
    var randomstring = require("randomstring")
    var rand = randomstring.generate(4)
    
    const cred = require('../fixtures/credentialsData') //Datadriven approach: manage in fixture.
    cred.forEach(cred => {
    it(`Sign In Flow Test for user : ${cred.user}`, () => {
        
        //Following multiple sign in case is blocker due to REQUEST THROTTLE issue that deactivate the account.
        //Applied cy.wait but still facing the same issue so alternative solution: automate the multiple user sign in 
        //verification via registration flow.

        // cy.get('.select-signin')
        //   .click()  
        
        // cy.get('[id="join_neu_email_field"]')
        //   .type(cred.email)
        
        // cy.get('[id="join_neu_password_field"]')
        //   .type(cred.pass)
    
        // cy.wait(10000)  

        // cy.get('[name="submit_attempt"]')  
        //   .click()

        // cy.wait(10000)

        cy.get('.select-signin')
          .should('contain','Sign in')
          .click()    
   
        cy.get('.select-register')
          .should('contain','Register')
          .click()  

        //Code handle in command.js        
        cy.registration(cred.user+rand+"@gmail.com",cred.user,cred.pass)
        
        cy.get('.sign-out')
          .click()

      })
    })
    
    it('Verify validation error on login failure', () => {
       
        cy.get('.select-signin')
          .should('contain','Sign in')
          .click()    
    
        cy.get('[id="join_neu_email_field"]')
          .type('babyshark1@gmail.com')
        
        cy.get('[id="join_neu_password_field"]')
          .type('check1234')
    
        cy.get('[name="submit_attempt"]')  
          .click()

        cy.get('[id="aria-join_neu_email_field-error"]')
          .should('contain','Email address is invalid.')  

    })
})