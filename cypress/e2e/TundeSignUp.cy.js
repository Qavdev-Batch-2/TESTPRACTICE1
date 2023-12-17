import {signup} from "../fixtures/TundeSelectors";

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
    cy.get(signup.firstNameField).type('Tunde')
    cy.get(signup.lastNameField).type('Aboriogun')
    cy.get(signup.emailAddressField).type('aboriogun@yahoo.com')
    cy.get(signup.phoneNumberField).type('07062023667')
    cy.get(signup.passwordField).type('Asipita1')
    cy.get(signup.createAccountBtn).click()


  
    
  




  })
})