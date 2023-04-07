/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

const tel=['0712345678','0746242358'];
const pass=['vasile123','123vasile'];
describe('TC5 Verify that Login functionality works with invalid credentials.',()=>{
   
    it('Fill in all required fields with valid credentials.',()=>{
        cy.visit(URL);
        //Press on Top Voluntari
        cy.get("a[href='/auth/login']").click();

        //Fill all required fields
        //Check if login work's with valid pass and invalid phone number and vice versa;
        for(let i=0;i<tel.length;i++){
            cy.get('input[name="phone_number"]').type(tel[i]);
            cy.get('input[name="password"]').type(pass[i]);
            //Press click on Autentificare button
            cy.get('#app > div > div > div > div.row.row.login-page.justify-content-center > div > div > div.card-body > form > div.card-footer.text-center > button').click();

            //Verifi if we are still on Autentificare page;
            cy.url().should('contain','/auth/login');
            cy.get('div.card-header > h5').should('have.text','Autentificare')
            cy.get('input[name="phone_number"]').clear();
            cy.get('input[name="password"]').clear();
        }


    })

})
