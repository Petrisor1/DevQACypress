/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';


describe('TC4 Autentificare page',()=>{
   beforeEach(()=>{
    cy.fixture('data.json').as('data');
   })
    it('Fill in all required fields with valid credentials.',()=>{
       

        cy.visit(URL);
        //Press on Top Voluntari
        cy.get("a[href='/auth/login']").click();

        //Fill all required fields
        cy.get("@data").then((data)=>{
            cy.get('input[name="phone_number"]').type(data.telefon);
            cy.get('input[name="password"]').type(data.password);
        })
        
        
        //Press click on Autentificare button
        cy.get('#app > div > div > div > div.row.row.login-page.justify-content-center > div > div > div.card-body > form > div.card-footer.text-center > button').click();

        //Check if some content is displayed after login
        cy.get('a[href="/dashboard"]').should('be.visible');
   

    })

})
