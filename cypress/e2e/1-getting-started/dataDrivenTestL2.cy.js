const dataTest = require('../../fixtures/sauceUsers.json')

describe('Data Test Driven sauceDemo',()=>{
   
   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/')
   })

dataTest.forEach(element => {
   it(element.name, function() {
      cy.get('#user-name').type(element.username)
      cy.get('#password').type(element.password)
      cy.get('#login-button').click()
      if(element.name=="Standard User"){
         cy.get('.title').should('contain.text',element.expected)
      }
      else{
         cy.get("[data-test='error']").should('contain.text',element.expected)
      }
   })
   
});
})