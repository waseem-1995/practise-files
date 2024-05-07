const url = `https://example.cypress.io/todo`;
describe("", () => {
  beforeEach(() => {
    cy.visit(url);
  });
  it("check if url is present", () => {
    cy.get("input.new-todo").should("exist");
  });
  it("we should be able to add a new todo", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get("input.new-todo").type("Learn Cypress{enter}");
    cy.get(".todo-list").children().should("have.length", 3);
  });
});
