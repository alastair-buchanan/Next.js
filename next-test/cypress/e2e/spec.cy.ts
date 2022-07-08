import { mount } from 'cypress/react'
import Layout from "../../components/Layout";

describe('Test app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('loads layout', () => {
    cy.request('GET', '/api/users').should('exist')
    cy.intercept('GET', 'api/users/*')

    cy.get('#header-toolbar').should('exist')
    cy.get('#app-logo').should('exist').and('have.attr', 'src')
    cy.get('#home-button').should('contain', 'Home')
  })

  it('loads table', () => {
    cy.request('GET', '/api/users').should('not.be.empty')

    cy.get('#table-container').should('contain', 'Users')
    cy.get('#table-title').should('exist')
    cy.get('[aria-label="simple-table"]').should('exist')
  })

  it('loads profile', () => {
    cy.get('#table-container').click()

    cy.url().should('include', '/profile')

    cy.get('#profile-card').should('exist')
    cy.get('#card-info').should('exist')
    cy.get('#profile-image').should('exist')
  })

  it('returns home', () => {
    cy.get('#table-container').click()

    cy.url().should('include', '/profile')

    cy.get('#home-button').click()

    cy.url().should('not.include', '/profile')
    cy.get('#table-container').should('exist')
  })
})