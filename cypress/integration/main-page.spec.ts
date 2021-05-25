/// <reference types="Cypress" />

context('main-page', () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  describe('Implicit Assertions', () => {
    it('.should() - render invitation', () => {
      cy.get('h3')
        .should('contain.text', 'ng-ngrx-fundamentals');
    });
  });
});
