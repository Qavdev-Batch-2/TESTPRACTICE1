import {signup} from "../fixtures/JulietSelectors.js";

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
    cy.get(signup.lastNameField).type('peter')
    cy.get(signup.emailAddressField).type('electricshock@gmail.com')
    cy.get(signup.phoneNumberField).type('08174321002')
    cy.get(signup.passwordField).type('Bubblegum')
    cy.get(signup.createAccountBtn).click()
  
    
  




  })
})