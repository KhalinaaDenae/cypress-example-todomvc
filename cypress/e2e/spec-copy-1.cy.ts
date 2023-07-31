describe('ToDo App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888');
  });

  it('Adds 3 todo items', () => {
    cy.get('.new-todo').type('Make every second count{enter}');
    cy.get('.new-todo').type('Invest in yourself{enter}');
    cy.get('.new-todo').type('Learn Cypress{enter}');
    cy.get('.todo-list li').should('have.length', 3);
  });

  it('Marks "Learn Cypress" as complete', () => {
    cy.contains('Learn Cypress').parent().find('.toggle').check();
    cy.get('.todo-list li.completed').should('have.length', 1);
  });

  it('Validates the text of the todo items', () => {
    cy.contains('Make every second count');
    cy.contains('Invest in yourself');
    cy.contains('Learn Cypress');
  });

  it('Validates that "Learn Cypress" has been marked as complete', () => {
    cy.contains('Learn Cypress').parent().find('.toggle').should('be.checked');
  });
});
