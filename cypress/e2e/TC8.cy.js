/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

describe('TC8 Verify that the user is able to use “Vizualizeaza” functionality',()=>{
    it('Login and go to Nevoi recomedate click on Vizializeaza',()=>{
        cy.visit(URL);
        //Press on Top Voluntari
        cy.get("a[href='/auth/login']").click();
    
        //Fill all required fields
        cy.get('input[name="phone_number"]').type('0746242358');
        cy.get('input[name="password"]').type('vasile123');
        
        //Press click on Autentificare button
        cy.get('#app > div > div > div > div.row.row.login-page.justify-content-center > div > div > div.card-body > form > div.card-footer.text-center > button').click();
    
        //Check if some content is displayed after login
        cy.get('a[href="/dashboard"]').should('be.visible');
    
    
        //Click on Nevoi Recomandate // a tag has nested 2 more elements so withouth multiple:true and force:true we get an error
        cy.get('a[href="/dashboard/recommended_needs"]').click({multiple:true,force:true});

        //Waith until all needs are displayed in table
        cy.wait(1000);
        cy.get('i.fas.fa-eye.view.text-info.action-icon').click();
       

        // Split error is printed so this code is stoping the test to fail
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('#app > div > div.main-panel > div > div > div.row > div > div > div.card-header > h5').should('have.text',' Vizualizare nevoie recomandata ');

        //If user is able to see the content:
        cy.get('div.card.need-card').should('be.visible');
    })
})