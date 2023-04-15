/// <reference types="Cypress" />
const URL='https://iwanttohelp.bim.assistcloud.services/';

let needID;
let authToken;
const data={
  "contact_first_name": "vasile",
  "contact_last_name": "cirdei",
  "contact_phone_number": "0746242358",
  "category": "food",
  "description": "asdfadsf",
  "address": {
    "street_name": "asdfasdf",
    "details": "asdfasdf",
    "county": "adsfadsf",
    "city": "asdfasdf",
    "postal_code": "1321235"
  }
}

describe('TC17 Create need / Get Need/ Delete need:',()=>{
   beforeEach(()=>{

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
    
    it('Create need:',()=>{
        
        cy.request({
            method: 'POST',
            url: 'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs',
            headers: {'authority': 'iwanttohelp.bim.assistcloud.services',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.7',
            'access-control-allow-origin': '*',
            'authorization': `Bearer ${authToken}`,
            'cache-control': 'no-cache',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://iwanttohelp.bim.assistcloud.services',
            'pragma': 'no-cache',
            'referer': 'https://iwanttohelp.bim.assistcloud.services/dashboard/recommended_needs/create',
            'sec-ch-ua': '"Chromium";v="112", "Brave";v="112", "Not:A-Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'},
            body:data,
          }).then((response) => {
            expect(response.status).to.eq(201);
            needID=response.body.need.id;
            console.log(needID);
          })
    })

    it('Get need',()=>{
        cy.request({
            method: 'GET',
            url:`https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/needs/${1095}`,
            headers:{'authority': 'iwanttohelp.bim.assistcloud.services',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.7',
            'access-control-allow-origin': '*',
            'authorization': `Bearer ${authToken}`,
            'cache-control': 'no-cache',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://iwanttohelp.bim.assistcloud.services',
            'pragma': 'no-cache',
            'referer': 'https://iwanttohelp.bim.assistcloud.services/dashboard/recommended_needs/create',
            'sec-ch-ua': '"Chromium";v="112", "Brave";v="112", "Not:A-Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'},
            //params: {"id":432},
        }).then((response)=>{
            expect(response.status).to.eq(200);
        })
    })

    it('Delete neeed',()=>{
        cy.request({
            method:'DELETE',
            url:`https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/recommended_needs/${needID}`,
            headers:{
                'authority': 'iwanttohelp.bim.assistcloud.services',
                'accept': 'application/json',
                'accept-language': 'en-US,en;q=0.7',
                'access-control-allow-origin': '*',
                'authorization': `Bearer ${authToken}` ,
                'cache-control': 'no-cache',
                'origin': 'https://iwanttohelp.bim.assistcloud.services',
                'pragma': 'no-cache',
                'referer': 'https://iwanttohelp.bim.assistcloud.services/dashboard/recommended_needs',
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
            expect(response.status).to.eq(204);
        })
    })
})

