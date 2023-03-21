class Logout_PO
{
    logout(){
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.contains('Logout')
        .then((lastlink)=>{

            const name=lastlink.text()
            cy.log(name)
            cy.wrap(lastlink).click()
        })
    }
}
export default Logout_PO