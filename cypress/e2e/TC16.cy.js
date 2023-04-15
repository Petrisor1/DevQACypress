/// <reference types="Cypress" />

const headers=
{
    "authority": "iwanttohelp.bim.assistcloud.services",
     "accept": "application/json" ,
     "accept-language": "en-US,en;q=0.7" ,
     "access-control-allow-origin": "*" ,
     "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE1MTI3NzgsInN1YiI6MTV9.qAyOxdY-mVixagMiK3bqDLQA-W0Q16xII4h8JaRkeDs" ,
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
}

describe('TC16 Test Get all recommended needs endpoint:',()=>{
    it('api/v1/charts/user_recomended_needs',()=>{
        cy.request({
            method: 'GET',
            url: 'https://iwanttohelp.bim.assistcloud.services/volunteers/api/v1/charts/user_recomended_needs',
            headers:headers,
            failOnStatusCode: false,
          }).then((response)=>{
            expect(response.status).to.eq(200);
          })
    })
})