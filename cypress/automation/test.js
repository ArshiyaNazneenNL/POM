//If u want any method and cypress to auto complete then...
///<reference types="Cypress"/>
describe('This is my first test suite', () => {
   
        it('This is my first test case',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
        cy.get('a[href$="AdminModule"]').click()
        //cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        ///cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.contains('Logout')
        .then((lastlink)=>{

            const name=lastlink.text()
            cy.log(name)
            cy.wrap(lastlink).click()
        })
        //cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').contains('Logout').click()
        
    });
   
});