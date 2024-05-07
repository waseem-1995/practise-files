const url = `http://localhost:3000`;
describe("Test The counter Application", () => {
  beforeEach(()=>{
    cy.visit(url);
  })
  it("counter should be present", () => {
 
    cy.get(".counter_value").should("exist");
    cy.get("button").should("exist");
    cy.get(".add_btn").should("exist");
    cy.get(".reduce_btn").should("exist");
  });
  it("counter initial value should be Counter: 10", () => {
    cy.get(".counter_value").should("have.text", "Counter: 10");
  });
  it("check for buttons", () => {
    cy.get("button.add_btn").should("have.text", "Add");
    cy.get("button.reduce_btn").should("have.text", "Reduce");
  });
  it("check if Add button working properly or not", () => {
    cy.get(".counter_value").should("have.text", "Counter: 10");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 11");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 12");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 13");
  });
  it("check if Reduce button working properly or not", () => {
    cy.get(".counter_value").should("have.text", "Counter: 10");
    cy.get(".reduce_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 9");
    cy.get(".reduce_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 8");
    cy.get(".reduce_btn").click();
    cy.get(".counter_value").should("have.text", "Counter: 2");
  });
});
