describe('Register User Scenario', () => {
    beforeEach(() => {

        //Code handle in command.js      
        cy.openWebsite()
        
    })

    var randomstring = require("randomstring")
    var rand = randomstring.generate(4)
    var email = 'testemail'+rand+'@gmail.com'
    var username = 'testuser'
    var password = 'testpass98765'

    it('Verify that user can be sign up and proper fields/validation error are appearing', () => {


        cy.get('.select-signin')
           .should('contain','Sign in')
           .click()    
      
         cy.get('.select-register')
           .should('contain','Register')
           .click()  

         cy.get('.col-xs-12')
           .should('contain','Create your account')
           .and('contain','Registration is easy.')
           .and('contain','Email address')    
           .and('contain','First name') 
           .and('contain','Password')

         cy.get('[name="submit_attempt"]')  
           .click()

         const errorID = ['[id="aria-join_neu_email_field-error"]', 
           '[id="aria-join_neu_first_name_field-error"]', 
           '[id="aria-join_neu_password_field-error"]']

         errorID.forEach(ID => {
         cy.get(ID)
           .should('contain','Can\'t be blank.')  
           
        })  

        //Code handle in command.js      
         cy.registration(email,username,password)
        
         cy.get('.sign-out')
           .click()
        })

    })