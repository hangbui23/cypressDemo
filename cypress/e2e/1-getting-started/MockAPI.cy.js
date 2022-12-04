describe('Mock API using cypress cy.intercept()',()=>{
   beforeEach(()=>{
      cy.intercept('GET','**/tags',{fixture:'/tags.json'})
      cy.intercept('GET','**/articles*',{fixture:'/articlefeed.json'})
      cy.visit('https://angular.realworld.io/')
     
   })

   it('Mock the tag from API respone and then validate on UI',()=>{
      cy.get('.tag-list').should('contain','cypress')
                         .and('contain','selenium')
                         .and('contain','playwright')
   })
   it('Mock the article from API responde and validate on UI',()=>{
cy.get('app-favorite-button.pull-xs-right').should('q       @contain','10')
      cy.get('.author').contains('testersdock')
      cy.get('.preview-link > p').contains('This is a test description')
   })
})