/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

describe('Verify that the user is able to properly logout.',()=>{
    it('Login Logout',()=>{
        cy.visit(URL);
        //Press on Top Voluntari
        cy.get("a[href='/auth/login']").click();
    
        //Fill all required fields
        cy.get('input[name="phone_number"]').type('0746242358');
        cy.get('input[name="password"]').type('vasile123');
        //Press click on Autentificare button
        cy.get('#app > div > div > div > div.row.row.login-page.justify-content-center > div > div > div.card-body > form > div.card-footer.text-center > button').click();
    
        //Check if some content is displayed after login
        const a=cy.get('a[href="/dashboard"]').should('be.visible');

        cy.get('#nav-collapse > ul > li:nth-child(9) > a').click();
        //Double check if we are logged OUT 
        cy.url().should('contain',`${URL}`);
        cy.get("a[href='/auth/login']").should('be.visible');
    })
})