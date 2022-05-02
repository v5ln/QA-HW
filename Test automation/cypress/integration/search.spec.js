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
    it('search_result_matching',()=>{
    var match_number = 0
        cy.get(`.tagify__input`).type(`${keyword1}`).type('{enter}')
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('div[test-data=searchItem_1]').within(()=>{
            cy.get('[test-data=TotalMatches]').invoke('text').then((value)=>{
                var matches = value.match(/(\d+)/);
                match_number = matches[0]
            })
            cy.get('a[target=_blank]').invoke('attr','href').then((value)=>{
                cy.visit('https://skillsmatch.mdx.ac.uk'+value)
            })
        })
        cy.get('legend').parent().nextUntil('[class=modal fade]').within(()=>{
            cy.get(':contains("software")').should('have.length',match_number)
        })
    })

    it('all_keyword_matching',()=>{
        cy.get(`.tagify__input`).type(`${keyword1}`).type('{enter}')
        cy.get(`.tagify__input`).type(`${keyword2}`).type('{enter}')
        cy.get('a[test-data=AdvancedOptions]').click()
        cy.get('input[test-data=match_all]').click()
        cy.get('.btn[test-data=searchButton]').click()

        cy.get('[id=search-result]').children('div[class=search-item]').its('length').then(len=>{
            for (var i=0; i<len; i++){
                cy.get('[test-data=searchItem_'+(i+1)+']')
                .children('[test-data=MatchedKeywords]').contains(keyword1)
                cy.get('[test-data=searchItem_'+(i+1)+']')
                .children('[test-data=MatchedKeywords]').contains(keyword2)
            }
        })

    })

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

    it('tag_case_sensitive',()=>{
        cy.get(`.tagify__input`).type(`${keyword3}`).type('{enter}')
        cy.get('a[test-data=AdvancedOptions]').click()
        cy.get('input[test-data=case_sensitive]').click()
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('[test-data=searchItem_1]')
            .children('[test-data=MatchedKeywords]')
            .contains(keyword3)
    })

})