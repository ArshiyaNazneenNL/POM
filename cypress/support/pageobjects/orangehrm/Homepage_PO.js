class Homepage_PO
{
    visitHomepage(){
        //cy.wait(10000)
        cy.visit(Cypress.env("orangehrm_homepage"));
        cy.wait(10000)

    }
    login()
    {
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
    }
}
export default Homepage_PO;