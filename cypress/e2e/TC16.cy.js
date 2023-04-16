/// <reference types="Cypress" />


let authToken;
describe('TC16 Test Get all recommended needs endpoint:',()=>{
  before(()=>{
        //LOGIN TO GET TOKEN 
    cy.request({
      method:'POST',
      url:'https://iwanttohelp.bim.assistcloud.services/auth/signin',
      body:'{"auth":{"phone_number":"0746242358","password":"vasile123"}}',
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

    authToken = response.body.jwt;
    cy.wrap(authToken).as('authToken');
     //authHeader={"Authorization": `Bearer ${response.body.jwt}`}
    // addAnotherHeader();
  })
  })
    it('api/v1/charts/user_recomended_needs',()=>{

        cy.request({
            method: 'GET',
            url: 'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/charts/user_recomended_needs',
            headers:{"authority": "iwanttohelp.bim.assistcloud.services",
               "accept": "application/json" ,
               "accept-language": "en-US,en;q=0.7" ,
               "access-control-allow-origin": "*" ,
               "authorization": `Bearer ${authToken}` ,
               "cache-control": "no-cache" ,
               "pragma": "no-cache" ,
               "referer": "https://iwanttohelp.bim.assistcloud.services/dashboard/profile" ,
               "sec-ch-ua": '"Chromium";v="112", "Brave";v="112", "Not:A-Brand";v="99"' ,
               "sec-ch-ua-mobile": "?0" ,
               "sec-ch-ua-platform": "Windows" ,
               "sec-fetch-dest": "empty", 
               "sec-fetch-mode": "cors" ,
               "sec-fetch-site": "same-origin" ,
               "sec-gpc": "1" ,
               "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
          },
            failOnStatusCode: false,
          }).then((response)=>{
            expect(response.status).to.eq(200);
          })
    })
})