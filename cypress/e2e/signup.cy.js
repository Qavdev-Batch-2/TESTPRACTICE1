import {signup} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("SignUp Page",() => {
  beforeEach(() => {
    cy.visit('/')

  }),

  it('Should be able to signUp', () => {
    cy.get(signup.signupBtn).click()
    cy.get(signup.dontHaveAnAcc).click()
    cy.get(signup.firstNameField).type('John')
    
  




  })
})