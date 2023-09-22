it("displays the company name and call to action", () => {
  cy.visit("/");
  cy.contains("My Mermaid Tales").should("be.visible");
  cy.get('[data-test="hero-primary-cta"]');
  cy.get('[data-test="hero-secondary-cta"]').click();
  cy.contains("Relive the Memory").should("be.visible");
});
