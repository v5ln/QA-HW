/// <reference types="cypress" />

const username = '7efa'
const pass = 'Mohammad'
const keyword1 = 'software'
const keyword2 = 'java'
const keyword3 = 'Software'
const keyword4 = 'البرمجيات'
const {Translate} = require('@google-cloud/translate').v2;
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

    it('search_in_title',()=>{
        cy.get(`.tagify__input`).type(`${keyword3}`).type('{enter}')
        cy.get('a[test-data=AdvancedOptions]').click()
        cy.get('input[test-data=search_in_title]').click()
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('[test-data=searchItem_1]').within(()=>{
            cy.get('a[target=_blank]').contains(keyword3)
        })
    })
    
    it('sort_based_on_reviews',()=>{
        var results_stars = []
        var stars = 0
        cy.get(`.tagify__input`).type(`${keyword1}`).type('{enter}')
        cy.get('a[test-data=AdvancedOptions]').click()
        cy.get('input[test-data=sort_by_user_reviews]').click()
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('[id=search-result]').children('div[class=search-item]').its('length').then(len=>{
            for (var i=0; i<len; i++){
                cy.get('[test-data=searchItem_'+(i+1)+']')
                    .children('[test-data=UserFeedback]')
                    .children().each(child=>{
                        if(child[0].className == 'fill'){
                            stars ++
                        }
                    })
                    cy.then(()=>{
                        results_stars.push(stars)
                        stars = 0
                    })
            }
        })
        cy.then(()=>{
            var sorted_result = Array.from(results_stars)
            sorted_result.sort().reverse()
            expect(results_stars).to.deep.eq(sorted_result)
        })
    })
    it('translate',()=>{
        
        const text = keyword1;
        var translated = 'x'
        // Google translate: 
        const translate = new Translate();
        const target = 'ar';
        async function translateText(word) {
            let [translations] = await translate.translate(text, target);
            translations = Array.isArray(translations) ? translations : [translations];
            translated = translations[0]
        }

        // demo translate:
        // function translate(word){
        //     if (word == keyword4){
        //         return keyword1
        //     }
        // }
        cy.then(()=>{
            translateText(keyword4);
        })
        cy.once('uncaught:exception', () => false);
        cy.wait(1000)

        cy.get(`.tagify__input`).type(`${keyword4}`).type('{enter}')
        cy.get('a[test-data=AdvancedOptions]').click()
        cy.get('select[test-data=translateInput]').select('en')
        cy.get('.btn[test-data=searchButton]').click()
        cy.get('[test-data=searchItem_1]')
            .children('[test-data=MatchedKeywords]').contains(translated)
        
        // translateText();
    })
})