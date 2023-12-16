import {signup} from "../fixtures/ToyosiSelectors";

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
    cy.get(signup.lastNameField).type('Chimezie')
    cy.get(signup.emailAddressField).type('Joemie2@gmail.com')
    cy.get(signup.phoneNumberField).type('08141313552')
    cy.get(signup.passwordField).type('case@study')
    cy.get(signup.createAccountBtn).click()


  
    
  




  })
})