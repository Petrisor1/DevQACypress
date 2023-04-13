/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

let nrRows;
describe('TC7 Verify that the Descriere field is required',()=>{
    it("Check if decriere field is required",()=>{

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
        
       //waith untill all needs are displayed in table
        cy.wait(1000);
        cy.get('table >tbody > tr').its('length').then((initialLength)=>{
    
            nrRows=initialLength;
            cy.get('button[class="btn btn-primary add-new-btn"]').click();
            cy.get('div.card-header > h5').should('have.text',' Creati o nevoie recomandata ');
    
            //Fill form with data
            cy.get('input[name="contact_first_name"]').type('test1');
            cy.get('input[name="contact_last_name"]').type('test1');
            cy.get('input[name="contact_phone_number"]').type('1234567890');
            
            cy.get('input[placeholder="Selectati tipul de nevoie"]').click();
    
            cy.get('ul#vs1__listbox.vs__dropdown-menu').eq(-1).click();
    
            
    
            cy.get('input[placeholder="Nume strada, numar ..."]').type('Stada testelor alea failurilor');
            cy.get('input[placeholder="Ex: etaj, apartament..."]').type('Apartamentul de teste');
    
            cy.get('input[name="county"]').type('Suceava');
            cy.get('input[name="city"]').type('Suceava');
            cy.get('input[name="postal_code"]').type('727030');
    
            cy.get('button.btn.btn-primary').click();
            cy.get('span[class="text-left text-danger"]').should('have.text',' Acest camp este obligatoriu. ');

            cy.get('a[href="/dashboard/recommended_needs"]').click({multiple:true,force:true});

            cy.get('table > tbody > tr').should((lis)=>{
                expect(lis).to.have.length(nrRows);
            });
        });

    })
   
})
