/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';


describe('TC3',()=>{
    beforeEach(()=>{
        cy.visit(URL);
        //Press on Top Voluntari
        cy.get("a[href='/search']").click();
    })
    it('Check if zoom in functionality Works',()=>{
       
    cy.get('button[aria-label="Zoom in"]').click();

    cy.get('#search-map > div.vue-map > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -197, -70)');
    
    })
    it('Check if Zoom out funcitonality works',()=>{
        cy.get('button[aria-label="Zoom out"]').click();
        cy.get('#search-map > div.vue-map > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -113, -209)');
    })
    
})