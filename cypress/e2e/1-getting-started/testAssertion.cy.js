describe('Test tool qa',()=>{
it('Test radio button',()=>{
   cy.visit('https://demoqa.com/radio-button')
   cy.get('.mt-3').should('not.exist')
   cy.get(".row input[type='radio']").should('have.length','3')
   cy.get(".row input[type='radio']").eq(0).click({force:true})
   cy.get('.mt-3').should('have.text','You have selected Yes')
   cy.get('.text-success').should('have.css','color','rgb(40, 167, 69)')
})

it('Test modal',()=>{
   cy.visit('https://demoqa.com/modal-dialogs')
   cy.get('#showSmallModal').then(btnSmall=>{
      const btnText = btnSmall.text()
      btnSmall.click()
      cy.get('.modal-body').should('have.text','This is a small modal. It has very less content')
      cy.get('#closeSmallModal').click()
   })
})

   it('Test modal 2',()=>{
      cy.visit('https://demoqa.com/modal-dialogs')
      cy.get('#showSmallModal').should('have.text','Small modal')
      cy.get('#showSmallModal').click()
         cy.get('.modal-body').should('have.text','This is a small modal. It has very less content')
         cy.get('#closeSmallModal').click()
      })

})