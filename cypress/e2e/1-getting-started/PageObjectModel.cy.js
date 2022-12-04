import homeSaucePage from '../../pageObject/homePage'
import inventoryPage from '../../pageObject/inventory'
const dataTest = require('../../fixtures/sauceUsers.json')

describe('PageObject sauceDemo',()=>{
   
   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/')
   })

   // it('should login successfully',()=>{
   //    homeSaucePage.typeUserName('standard_user')
   //    homeSaucePage.typePassword('secret_sauce')
   //    homeSaucePage.clickOnLoginBtn()
   //    inventoryPage.elements.titleSpan().should('contain.text','Products')
   // })

   // it('should display lock out message',()=>{
   //    homeSaucePage.typeUserName('locked_out_user')
   //    homeSaucePage.typePassword('secret_sauce')
   //    homeSaucePage.clickOnLoginBtn()
   //    homeSaucePage.elements.errorMessage().should('contain.text','Epic sadface: Sorry, this user has been locked out.')
   // })

   dataTest.forEach(test=>{
      it('log in to SauceDemo',function(){
         homeSaucePage.typeUserName(test.username)
         homeSaucePage.typePassword(test.password)
         homeSaucePage.clickOnLoginBtn()
      if(test.name=="Standard User"){
         inventoryPage.elements.titleSpan().should('contain.text',test.expected)
      }
      else{
         homeSaucePage.elements.errorMessage().should('contain.text',test.expected)
      }
      })

   })

})