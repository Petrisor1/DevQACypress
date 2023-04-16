let role;
describe('TC19 Test if you can add CAZ SPECIAL as a volunteer',()=>{
    beforeEach(()=>{
        cy.fixture('data.json').as("data");
    })
   
    it("Login to application, get the ROLE",()=>{
        cy.get("@data").then((data)=>{
            cy.request({
                method:'POST',
                url:'https://iwanttohelp.bim.assistcloud.services/auth/signin',
                body:`{"auth":{"phone_number":"${data.telefon}","password":"${data.password}"}}`,
                failOnStatusCode: false,
                headers:{
                  'authority': 'iwanttohelp.bim.assistcloud.services',
                  'accept': 'application/json',
                  'accept-language': 'en-US,en;q=0.7',
                  'access-control-allow-origin': '*',
                  'cache-control': 'no-cache',
                  'content-type': 'application/json;charset=UTF-8',
                  'origin': 'https://iwanttohelp.bim.assistcloud.services',
                  'pragma': 'no-cache',
                  'referer': 'https://iwanttohelp.bim.assistcloud.services/auth/login',
                  'sec-ch-ua': '"Chromium";v="112", "Brave";v="112", "Not:A-Brand";v="99"',
                  'sec-ch-ua-mobile': '?0',
                  'sec-ch-ua-platform': '"Windows"',
                  'sec-fetch-dest': 'empty',
                  'sec-fetch-mode': 'cors',
                  'sec-fetch-site': 'same-origin',
                  'sec-gpc': '1',
                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
                },
            }).then((response)=>{
                expect(response.status).to.equal(201);
                role=response.body.user.role;
                console.log(role);
            })
        })
       
    })

    it('Go to "Cazuri speciale" an try to add a new special case',()=>{
        cy.get("@data").then((data)=>{
            cy.visit(`${data.URL}`);
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

            cy.get('#app > div > div.sidebar > div > ul > li:nth-child(4) > a').click({multiple:true,force:true});
            if(role==="volunteer")
            {
                cy.get('button.btn.btn-primary.add-new-btn').click();
                cy.get('#bad_rating_modal___BV_modal_content_').should('be.visible');
            }
            else if(role==="adinnistrator"){

            }
            else {

            }
           
        })
        
    })

    
})