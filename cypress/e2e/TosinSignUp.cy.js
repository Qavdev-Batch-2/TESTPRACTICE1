import {signup} from "../fixtures/TosinSelectors.js";

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
    cy.get(signup.lastNameField).type('David')
    cy.get(signup.emailAddressField).type('Igosmile2023@gmail.com')
    cy.get(signup.phoneNumberField).type('09044467812')
    cy.get(signup.passwordField).type('Igosmile2023')
    cy.get(signup.createAccountBtn).click()
  




  })
})