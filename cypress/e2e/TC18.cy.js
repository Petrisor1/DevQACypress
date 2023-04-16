/// <reference types="Cypress" />

describe('TC18 Test api',()=>{
    beforeEach(()=>{
        cy.fixture('suggestion.json').as('suggestion');
      
    })

    it('Testing endpoint /api/v1/suggestions',()=>{
        cy.get("@suggestion").then((data)=>{
            cy.request({
                method:'POST',
                url:data.URL,
                body:data.bodySuggestions,
                headers:data.headersSuggestions
               }).
               then((response)=>{
                expect(response.status).to.eq(201);
               })
        })
     
    })
})
