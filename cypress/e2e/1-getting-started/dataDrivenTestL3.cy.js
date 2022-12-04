require('cypress-xpath');
const dataTest = require('../../fixtures/sauceUsers.json')

describe('Data Test Driven sauceDemo',()=>{
   
   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/')
   })

dataTest.forEach(element => {
   it(element.name, function() {
      cy.loginToSauceDemo(element.username,element.password)

      if(element.name=="Standard User"){
         //cy.get('.title').should('contain.text',element.expected)
         cy.xpath("//span[@class='title']").should('contain.text',element.expected)
         cy.LogoutSauceDemo()
         cy.get('#login-button').should('contain.value','Login')
         cy.url().should('eq','https://www.saucedemo.com/')
      }
      else{
         cy.get("[data-test='error']").should('contain.text',element.expected)
      }
   })   
});


})