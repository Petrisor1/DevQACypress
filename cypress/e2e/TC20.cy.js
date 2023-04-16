/// <reference types="Cypress" />
let nrNevoi;
describe('TC20 Check if Nevoi in asteptare chart is updateing dinamicly',()=>{
    beforeEach(()=>{
        cy.fixture('data.json').as('data');
        cy.get('@data').then((data)=>{
            cy.visit(data.URL);
            //Press on Top Voluntari
            cy.get("a[href='/auth/login']").click();
    
            //Fill all required fields
            cy.get("@data").then((data)=>{
                cy.get('input[name="phone_number"]').type(data.telefon);
                cy.get('input[name="password"]').type(data.password);
            })
           
            
            //Press click on Autentificare button
            cy.get('#app > div > div > div > div.row.row.login-page.justify-content-center > div > div > div.card-body > form > div.card-footer.text-center > button').click();
        })
        
    })
    it("Get the initial number of needs from chart",()=>{

      

        //Check if some content is displayed after login
        cy.get('a[href="/dashboard"]').should('be.visible');

        //Get the initial number of needs from chart
        cy.get('#app > div > div.main-panel > div > div > div.bar-charts-page > div > div:nth-child(1) > div > div.card-header > h3')
        .invoke('text')
        .then((val)=>{
            nrNevoi=val;
            console.log(nrNevoi);
        })

    })
    it('Add new task',()=>{
         //Click on Nevoi Recomandate // a tag has nested 2 more elements so withouth multiple:true and force:true we get an error
         cy.get('a[href="/dashboard/recommended_needs"]').click({multiple:true,force:true});

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
            //Submimt form
            cy.get('button.btn.btn-primary').click();
    })

    it('Check if Nevoi in asteptare number has updated',() =>{
        cy.get('a[href="/dashboard"]').click({multiple:true,force:true});
        cy.get('#app > div > div.main-panel > div > div > div.bar-charts-page > div > div:nth-child(1) > div > div.card-header > h3')
        .should('have.text',` ${parseInt(nrNevoi)+1} `);
    })
})