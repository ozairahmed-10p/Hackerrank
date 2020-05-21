describe('Add Cart Scenario', () => {
    beforeEach(() => {

        cy.visit("https://www.etsy.com/listing/486866902/serman-brands-rfid-blocking-bifold-slim?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-6&plkey=f5c6dbba4bf90a8521e55cc8dcf72de3b11dec83%3A486866902")
        
    })

    var productName = 'SERMANBRANDS'
    var productDesc = 'SERMAN BRANDS- RFID Blocking Bifold Slim Genuine Leather Thin Minimalist Front Pocket Wallets for Men Money Clip (Texas Brown 1.S)'
    var productPrice = 'USD 29.99'
    
    it('Verify product information and adding it in cart', () => {

        cy.get('[id="listing-page-cart"]')
          .should('contain',productName)
          .and('contain',productDesc)
          .and('contain',productPrice)

        cy.get('[type="submit"]')
          .contains('Add to basket')  
          .click()

        //Cart screen  
        cy.get('[id="page-title"]')
          .should('contain','1 item in your basket')  

        cy.get('.multi-shop-cart-single')
          .should('contain',productName)
          .and('contain',productDesc)
          .and('contain',productPrice)
          .contains('Remove')
          .click()

         cy.get('[id="newempty"]')
           .should('contain','Your basket is empty.') 

    })
})