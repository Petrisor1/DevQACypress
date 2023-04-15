/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

let nrRows;
describe('TC6 Verify that a user is able to add a new Nevoie recomandata',()=>{
    beforeEach(()=>{
        cy.fixture('data.json').as('data');
    })
    it('Add new Nevoie recomandata',()=>{
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


        //Click on Nevoi Recomandate // a tag has nested 2 more elements so withouth multiple:true and force:true we get an error
        cy.get('a[href="/dashboard/recommended_needs"]').click({multiple:true,force:true});
        
        //waith untill all needs are displayed in talbe;
        cy.wait(1000);
        cy.get('table >tbody > tr').its('length').then((initialLength)=>{

            console.log('Valoare initiala este: '+initialLength);
            nrRows=initialLength;
            cy.get('button[class="btn btn-primary add-new-btn"]').click();
            cy.get('div.card-header > h5').should('have.text',' Creati o nevoie recomandata ');
    
            //Fill form with data
            cy.get('input[name="contact_first_name"]').type('test1');
            cy.get('input[name="contact_last_name"]').type('test1');
            cy.get('input[name="contact_phone_number"]').type('1234567890');
            
            cy.get('input[placeholder="Selectati tipul de nevoie"]').click();
    
            cy.get('ul#vs1__listbox.vs__dropdown-menu').eq(-1).click();
    
            cy.get('textarea[name="description"]').type('Test');
    
            cy.get('input[placeholder="Nume strada, numar ..."]').type('Stada testelor alea failurilor');
            cy.get('input[placeholder="Ex: etaj, apartament..."]').type('Apartamentul de teste');
    
            cy.get('input[name="county"]').type('Suceava');
            cy.get('input[name="city"]').type('Suceava');
            cy.get('input[name="postal_code"]').type('727030');
    
            cy.get('button.btn.btn-primary').click();

        });
    });
    it('Check if newRow was added',()=>{
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

         //Cgecj if number of rows was changed;
         cy.wait(500);
         cy.get('table > tbody > tr').should((lis)=>{
            switch(nrRows)
            {
                case 1:
                    expect(lis).to.have.length(nrRows);
                    break
                case nrRows>1:
                    expect(lis).to.have.length(nrRows+1);
                    break;
            }

        });

    })
})