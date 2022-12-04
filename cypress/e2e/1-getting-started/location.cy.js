let username = "standard_user"
let password= "secret_sauce"

describe('Test sauceDemo',()=>{
   beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
   })
   it('should have title Swag Labs',()=>{
    cy.title().should('eq','Swag Labs')
   })
   it("should have url 'https://www.saucedemo.com/'",()=>{
      cy.url().should('eq','https://www.saucedemo.com/')
   })
   it("should have protocol 'https",()=>{
      cy.location().should((loc) => {
      expect(loc.protocol).to.eq('https:')
      }
   )})
   it("should have url 'https'",()=>{
      cy.location('protocol').should('contains','https')
   })
   it("should have host 'www.saucedemo.com'",()=>{
      cy.location('host').should('eq','www.saucedemo.com')
   })
   it("should redirect to 'inventory.html'",()=>{
      //cy.get('#user-name').type(username)
      //cy.get('input').first().type(username)
      cy.get('input').filter('[type="text"]').type(username)
      //cy.get('#password').type(password)
      //cy.get('input').eq(1).type(password)
      cy.get('input').filter('[type="password"]').type(password)
      //cy.get('#login-button').click()
      //cy.get('input').last().click()
      cy.get('input').filter('[type="submit"]').click()
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')
      cy.location('pathname').should('contains','/inventory.html')

   })

   it("EQ|FIRST|LAST method'",()=>{
      cy.get('input').first().type(username)
      cy.get('input').eq(1).type(password)
      cy.get('input').last().click()
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')
      cy.location('pathname').should('contains','/inventory.html')
   })

   it("FILTER method",()=>{
      cy.get('input').filter('[type="text"]').type(username)
      cy.get('input').filter('[type="password"]').type(password)
      cy.get('input').filter('[type="submit"]').click()
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')
      cy.location('pathname').should('contains','/inventory.html')

   })
   it("FIND method",()=>{
      cy.get('form').find('input').first().type(username)
      cy.get('form').find('input').eq(1).type(password)
      cy.get('form').find('input').last().click()
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')
      cy.location('pathname').should('contains','/inventory.html')
   })

   it("PARENT method",()=>{
      cy.get('form').parent().should('have.class','login-box')
   })
})