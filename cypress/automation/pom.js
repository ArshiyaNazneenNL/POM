///<reference types="Cypress"/>
import Homepage_PO from "../support/pageobjects/orangehrm/Homepage_PO";  
import Link_PO from "../support/pageobjects/orangehrm/Link_PO";    
import Logout_PO from "../support/pageobjects/orangehrm/Logout_PO.";

describe('This is the test suite', () => {
    const  homepage_po=new Homepage_PO();

    beforeEach(function()  {
        //This is to create a object
        homepage_po.visitHomepage();
        homepage_po.login();
        });
        it('Page Object Model Test Case', () => {
            cy.SelectName('Admin')
            //link_po.link_click('Admin');

        });
});