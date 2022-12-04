describe('Read/Write json',()=>{
   it('API testing',()=>{
      cy.request('GET','https://www.saucedemo.com/').then(response=>{
         cy.log(response.headers['content-type']);
         cy.log(response.status);
         cy.writeFile('cypress/fixtures/read_write.json',response.headers['content-type'])
      })
   })
})