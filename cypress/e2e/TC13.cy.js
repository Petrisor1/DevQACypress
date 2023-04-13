/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

describe('TC13 Verify “Completeaza” functionality',()=>{
    beforeEach(() =>{
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
   
        //CLick on nevoi
        cy.get('div.sidebar > div > ul > li:nth-child(2) > a').click({multiple:true,force:true});
        cy.wait(2000);
    })

    it('Completeaza functionaliy',()=>{
        let flag=false;

        cy.get('table > tbody > tr').each(($tr, index, $list)=>{
            cy.then(()=>{

                if(flag===true){
                    return false;
                }
                    cy.get(`table > tbody > tr:nth-child(${index+1}) > td:nth-child(5) > div > i.fas.fa-check.view.text-success.action-icon`).then((icon)=>{
                    //if icon is disabled    
                    if(icon.attr('disabled')){
                        cy.wait(1);
                        
                        }
                    //if icon is not disabled
                        else{
                            cy.get(`table > tbody > tr:nth-child(${index+1}) > td:nth-child(5) > div > i.fas.fa-check.view.text-success.action-icon`).click({force:true});
                            cy.get('div.row.row.my-4.justify-content-center > div > div > div.vue-star-rating > span:nth-child(4)').click();
                            cy.get('textarea[placeholder="Introduceti mesajul dumneavoastra aici..."]').type('Acesta este un mesaj de test');
                            cy.get('button.btn.btn-primary.btn-secondary.btn-sm').click();
                            flag=true;
                            return false;
                        }
                })
               }) 
        })

    })
})