/// <reference types="cypress" />

context('Аттестация 3', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('серия операций в соответствии с заданием', () => {
    cy.get('button[ng-click="customer()"]').click()

    cy.get('#userSelect').should('be.visible')
    cy.get('#userSelect').should('have.value', '')
    cy.get('#userSelect').select(3)

    cy.get('#userSelect').parent().next('button').should('be.visible').click()

    cy.get('button[ng-click="deposit()"]').should('be.visible').click()

    cy.get('form[ng-submit="deposit()"]').find('input[type="number"]').type('300')
    cy.get('form[ng-submit="deposit()"]').find('button[type="submit"]').click()

    cy.get('span[ng-show="message"]').should('be.visible').should('have.text', 'Deposit Successful')

    cy.get('button[ng-click="byebye()"]').click()
  })
})
