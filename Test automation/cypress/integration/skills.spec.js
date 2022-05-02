/// <reference types="cypress" />





describe('skillsmatch_skills_test',()=>{
    const username = '7efa'
    const pass = 'Mohammad'

    var area_1 = 0
    var area_2 = 0
    var area_3 = 0
    var area_4 = 0
    var area_5 = 0
    var area_6 = 0

    beforeEach(()=>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/profile/')
        cy.login(username,pass)
    });

    it('UpdateSkills',()=>{
        
        cy.get('.btn[test-data=UpdateMySkills]').click()
        cy.get('.btn[test-data=StartUpdatingMySkills]').click()
        
        // Area 1 : 
        cy.get('h2[test-data=area_1]')
        .nextUntil('h2[test-data=area_2]')
        .within(()=>{
            cy.get('input[test-data=answer_3]').click()
        })
        cy.get('input[test-data=NextStep]').click()

        // Area 2 :
        cy.get('h2[test-data=area_2]')
        .nextUntil('h2[test-data=area_3]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_2]').click()
                area_1 += 1
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_1 += 2
            })

            cy.get('label[test-data=question_3]')
            .nextUntil('label[test-data=question_4]')
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_1 += 2
            })

            cy.get('label[test-data=question_4]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_4]').click()
                area_1 += 3
            })
            
            cy.get('input[name=next]').click()
        })

        // Area 3 :
        cy.get('h2[test-data=area_3]')
        .nextUntil('h2[test-data=area_4]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_1]').click()
                area_2 += 0
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_2]').click()
                area_2 += 1
            })

            cy.get('label[test-data=question_3]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_2 += 2
            })
            
            cy.get('input[name=next]').click()
        })

        // Area 4 :
        cy.get('h2[test-data=area_4]')
        .nextUntil('h2[test-data=area_5]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_1]').click()
                area_3 += 0
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
                area_3 += 4
            })

            cy.get('label[test-data=question_3]')
            .nextUntil('label[test-data=question_4]')
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_3 += 2
            })
            
            cy.get('label[test-data=question_4]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_3 += 2
            })
            
            cy.get('input[name=next]').click()
        })

        // Area 5 :
        cy.get('h2[test-data=area_5]')
        .nextUntil('h2[test-data=area_6]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
                area_4 += 2
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_4]').click()
                area_4 += 3
            })

            cy.get('label[test-data=question_3]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
                area_4 += 4
            })
            
            cy.get('input[name=next]').click()
        })

        // Area 6 :
        cy.get('h2[test-data=area_6]')
        .nextUntil('h2[test-data=area_7]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_1]').click()
                area_5 += 0
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_2]').click()
                area_5 += 1
            })

            cy.get('label[test-data=question_3]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_4]').click()
                area_5 += 3
            })

            cy.get('input[name=next]').click()
        })

        // Area 7 :
        cy.get('h2[test-data=area_7]')
        .nextUntil('h2[test-data=area_8]')
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
                area_6 += 4
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
                area_6 += 4
            })

            cy.get('label[test-data=question_3]')
            .nextUntil('label[test-data=question_4]')
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
                area_6 += 4
            })
            
            cy.get('label[test-data=question_4]')
            .nextUntil('label[test-data=question_5]')
            .within(()=>{
                cy.get('input[test-data=answer_4]').click()
                area_6 += 3
            })

            cy.get('label[test-data=question_5]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_2]').click()
                area_6 += 1
            })
            
            cy.get('input[name=next]').click()
        })

        cy.get('h2[test-data=area_8]')
        .nextUntil()
        .parent().parent()
        .within(()=>{

            cy.get('label[test-data=question_1]')
            .nextUntil('label[test-data=question_2]')
            .within(()=>{
                cy.get('input[test-data=answer_3]').click()
            })

            cy.get('label[test-data=question_2]')
            .nextUntil('label[test-data=question_3]')
            .within(()=>{
                cy.get('input[test-data=answer_5]').click()
            })

            cy.get('label[test-data=question_3]')
            .nextUntil()
            .within(()=>{
                cy.get('input[test-data=answer_4]').click()
            })
            
            cy.get('input[name=submit]').click()
        })
        
    })
})

