Cypress.Commands.add('addTodo', (todoText) => {
  cy.get('.new-todo').type(todoText + '{enter}');
});

Cypress.Commands.add('markTodoComplete', (todoText) => {
  cy.contains(todoText)
    .parent()
    .find('.toggle')
    .check()
    .should('be.checked');
});

Cypress.Commands.add('validateTodoText', (todoText) => {
  cy.contains(todoText);
});
