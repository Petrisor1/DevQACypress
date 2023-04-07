/// <reference types="Cypress" />

const URL='https://iwanttohelp.bim.assistcloud.services/';
describe('TC1 \n Verify that all header’s elements navigate to the correct page', () => {
    it('Click on Top Voluntari link', () => {
      //GO on WebPage;
      cy.visit(URL);
      //Click on Top Voluntari link
      cy.get("a[href='/search']").click();
      //test if we are on correct page after click
      cy.url().should('contain','/search'); 
      //Test if content is displayed
      cy.get('input[placeholder="Cauta voluntar"]').should('be.visible');

      })

      it('Click on Acasa link',()=>{
        cy.visit(URL);

        cy.get(".navbar-nav >li").eq(1).click();
        
        
        cy.url().should('contain',URL);
        //Testing if content is displayed
        cy.get("img[src='img/groceries.png']");
      })
      it('Click on Lista Nevoi link',()=>{
        cy.visit(URL);
        //Click on Lista Nevoi link
        cy.get("a[href='/needs_list']").click();
        //test if we are on correct page after click
        cy.url().should('contain','/needs_list');
        //Testing if content is displayed
        cy.get('.mb-1 h3.card-title').should('have.text','Lista nevoi & Cazuri speciale');
      })

      it('Click on Despre Noi link',()=>{
        cy.visit(URL);
         //Click on Despre Noi link
         cy.get("a[href='/about']").click();
         //test if we are on correct page after click
         cy.url().should('contain','/about');
         //Testing if content is displayed
         cy.get('.mb-5 h3.card-title').should('have.text','Despre noi');

      })

    it('Click on Ofera Sugestie  link',()=>{
        cy.visit(URL);
        //Click on Ofera Sugestie  link
        cy.get("a[href='/contact']").click();
        //test if we are on correct page after click
        cy.url().should('contain','/contact');
        //Testing if content is displayed
        cy.get('.col-lg-6 h5.title.text-left').should('have.text','Ofera o sugestie');
    })

       it("Click on Devino Voluntar",()=>{
    //Click on Devino Voluntar link
    cy.visit(URL)
    cy.get("a[href='/auth/register']").click();
    //test if we are on correct page after click
    cy.url().should('contain','/auth/register');
     //Testing if content is displayed
     cy.get('.col-sm-12.col-md-10.col-lg-8 h5.title.text-center').should('have.text','Inregistrare');
    })

    it('Click on Autentificare link',()=>{

      cy.visit(URL);
      //Click on Autentificare link
      cy.get("a[href='/auth/login']").click();
      //test if we are on correct page after click
      cy.url().should('contain','/auth/login');
      //Testing if  content is displayed
      cy.get('.col-sm-12.col-md-6.col-lg-4 h5.title.text-center').should('have.text','Autentificare');
      
    })

  })