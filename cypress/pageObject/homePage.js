class homeSaucePage{
elements = {
    username:()=>cy.get('#user-name'),
    password:()=>cy.get('#password'),
    loginBtn:()=>cy.get('#login-button'),
    errorMessage:()=>cy.get('[data-test="error"]')
    }

    typeUserName(username){
        this.elements.username().type(username)
    }

    typePassword(password){
        this.elements.password().type(password)
    }

    clickOnLoginBtn(){
        this.elements.loginBtn().click()
    }
    
}
module.exports = new homeSaucePage()