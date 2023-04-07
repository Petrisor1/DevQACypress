/// <reference types="Cypress" />

const URL='https://iwanttohelp.bim.assistcloud.services/';

describe('Verify that on “Top Voluntari” page the map and at least one volunteer is displayed.',()=>{
    beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
 })

    it('Check if map is displayed',()=>{
        //Visit website
        cy.visit(URL);
        //Click on Top Voluntari
         cy.get("a[href='/search']").click();

         //Check if map is displayed
        cy.get('div.gm-style').should('be.visible').should('have.css','width','481.65625px').and('have.css','height','554.390625px');

        //Go to last row 
        cy.get('ul[role="menubar"] > li').eq(-2).click();

        //Check if last volunteer is displayed
        cy.get('div.row > div').last().should('be.visible');
    })


    
})