/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

let nrRows;
describe('TC9 Verify that the user is able to use “Sterge” functionality',()=>{
    it('Go on nevoi recomandate and click "Sterge" button',()=>{
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
        cy.wait(2000);
        
        //Getting the initial number of rows
        cy.get('table >tbody > tr').its('length').then((initialLength)=>{
            nrRows=initialLength;
        //Check if table has content
        cy.get('table >tbody > tr').children().should('not.have.length',0);

        //Check if the row which appears when table is empty exists
        cy.get('tbody > tr.b-table-empty-row').should('not.exist');

        //click on delte button
        cy.get('tbody > tr:nth-child(1) > td:nth-child(6) > div > i.fas.fa-trash-alt.view.text-danger.action-icon').click()

        //Confirm delete
        cy.get('button.btn.btn-primary.btn-secondary.btn-sm').click();
        
        cy.wait(2000);
        //Check if the number of rows decreased 
        cy.get('table > tbody > tr').should((lis)=>{
           
                    expect(lis).to.have.length(nrRows-1);
           

        });

        })

    })
})