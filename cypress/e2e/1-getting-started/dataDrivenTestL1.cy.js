describe('Data Test Driven sauceDemo',()=>{
   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('sauceDemo').then(user=>{
      this.user = user
    })
   })

   it('Standard user',function(){
      cy.get('#user-name').type(this.user.standardUsername)
      cy.get('#password').type(this.user.systemPassword)
      cy.get('#login-button').click()
      cy.get('.title').should('contain.text','Products')
      cy.get('.bm-burger-button').click()
      cy.get('#logout_sidebar_link').click()
   })

   it('Lock user',function(){
      cy.get('#user-name').type(this.user.lockedUsername)
      cy.get('#password').type(this.user.systemPassword)
      cy.get('#login-button').click()
      cy.get("[data-test='error']").should('contain.text','Epic sadface: Sorry, this user has been locked out.')
   })

   it('Dummy user',function(){
      cy.get('#user-name').type(this.user.dummyUsername)
      cy.get('#password').type(this.user.dummyPassword)
      cy.get('#login-button').click()
      cy.get("[data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
   })

})