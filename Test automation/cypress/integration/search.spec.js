/// <reference types="cypress" />

const username = '7efa'
const pass = 'Mohammad'
const keyword1 = 'software'
const keyword2 = 'java'
const keyword3 = 'Software'

const runout = [keyword1, keyword2]
const regex_all_kewords = new RegExp(`${runout.join('|')}`, 'g')




describe('skillsmatch_search_test',()=>{
    beforeEach(()=>{
        cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/search/')
        cy.login(username,pass)
    });
    it('keyword_matching',()=>{
        cy.get(`.tagify__input`).type(`${keyword1}`).type('{enter}')
        cy.get(`.tagify__input`).type(`${keyword2}`).type('{enter}')
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('[id=search-result]').children('div[class=search-item]').its('length').then(len=>{
            for (var i=0; i<len; i++){
                cy.get('[test-data=searchItem_'+(i+1)+']')
                .children('[test-data=MatchedKeywords]').contains(regex_all_kewords)
            }
        })
    })
})