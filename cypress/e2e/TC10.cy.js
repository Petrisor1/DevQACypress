/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

describe('TC10 Verify the search functionality',()=>{
    beforeEach(()=>{
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
    })
    
    it('1. Search by DESCRIERE',()=>{

        cy.get('input.form-control.form-control-md').type('Test');
        cy.get('tbody > tr > td:nth-child(1) > div').should('contain','Test');
    })
    it('2. Search by PERSOANA CONTACT',()=>{
        cy.get('input.form-control.form-control-md').type('Cirdei Vasile');
        cy.get('tbody > tr > td:nth-child(2) > div').should('contain',' Cirdei Vasile ');

    })
    it('3. Search by ADRESA',()=>{
        cy.get('input.form-control.form-control-md').type('Stada testelor alea failurilor');
        cy.get('tbody > tr > td:nth-child(3) > div').should('contain',' Stada testelor alea failurilor ');
    })

    it('4. Seach by TELEPHONE',()=>{
        cy.get('input.form-control.form-control-md').type('1234567890');
        cy.get('tbody > tr > td:nth-child(4) > div').should('contain','1234567890');
    })
})