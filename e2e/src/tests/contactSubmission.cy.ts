import { recurse } from "cypress-recurse";

describe("Given JavaScript is disabled", () => {
  let userEmail;
  before(() => {
    cy.task("getUserEmail").then((email) => {
      expect(email).to.be.a("string");
      userEmail = email;
    });
  });
  it("should allow customer to submit contact form with an email", () => {
    cy.intercept("/api/handleContactFormSubmission").as(
      "contactFormSubmission"
    );
    cy.visitRouteWithJavaScriptDisabled("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type(userEmail);
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission").then((interception) => {
      expect(interception.response.statusCode).to.equal(302);
    });
    cy.contains("Thanks for reaching out! You'll receive an email shortly.");
    recurse(() => cy.task("getLastEmail"), Cypress._.isObject, {
      timeout: 60000,
      delay: 5000,
    })
      .its("html")
      .then((html) => {
        cy.document({ log: false }).invoke({ log: false }, "write", html);
      });
  });
  it("should inform the customer of issues processing the request", () => {
    cy.intercept("/api/handleContactFormSubmission", {
      statusCode: 302,
      headers: {
        Location: "/contactuserror#contact-us-submission-message",
      },
    }).as("contactFormSubmission");
    cy.visitRouteWithJavaScriptDisabled("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type(userEmail);
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission").then((interception) => {
      cy.contains(
        "Sorry, we're having some issues please try reaching out again shortly."
      );
    });
  });
  it("should require customer to provide an email when submitting form", () => {
    Cypress.on("fail", (error) => {
      if (error.message.indexOf("Timed out retrying") !== 0) throw error;
    });
    cy.intercept("/api/handleContactFormSubmission").as(
      "contactFormSubmission"
    );
    cy.visitRouteWithJavaScriptDisabled("/");
    cy.get("#books").scrollIntoView();
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission", { timeout: 2000 });
  });
  it("should require customer to provide a valid email when submitting form", () => {
    Cypress.on("fail", (error) => {
      if (error.message.indexOf("Timed out retrying") !== 0) throw error;
    });
    cy.intercept("/api/handleContactFormSubmission").as(
      "contactFormSubmission"
    );
    cy.visitRouteWithJavaScriptDisabled("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type("rosa");
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission", { timeout: 2000 });
  });
});

describe("Given JavaScript is enabled", () => {
  let userEmail;
  before(() => {
    cy.task("getUserEmail").then((email) => {
      expect(email).to.be.a("string");
      userEmail = email;
    });
  });
  it("should allow customer to submit contact form with an email", () => {
    cy.intercept("/api/handleContactFormSubmission?type=application/json").as(
      "contactFormSubmission"
    );
    cy.visit("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type(userEmail);
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      cy.wrap(interception.response.body).should("deep.include", {
        reason: "Form submitted successfully",
        email: userEmail,
      });
      cy.contains("Thanks for reaching out! You'll receive an email shortly.");
    });
    recurse(() => cy.task("getLastEmail"), Cypress._.isObject, {
      timeout: 60000,
      delay: 5000,
    })
      .its("html")
      .then((html) => {
        cy.document({ log: false }).invoke({ log: false }, "write", html);
      });
  });
  it("should inform the customer of issues processing the request", () => {
    cy.intercept("/api/handleContactFormSubmission", {
      statusCode: 500,
    }).as("contactFormSubmission");
    cy.visitRouteWithJavaScriptDisabled("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type(userEmail);
    cy.get('[data-test="submit-contact-form"]').click();
    cy.wait("@contactFormSubmission").then((interception) => {
      cy.contains(
        "Sorry, we're having some issues please try reaching out again shortly."
      );
    });
  });
  it("should require customer to provide an email when submitting form", () => {
    cy.visit("/");
    cy.get("#books").scrollIntoView();
    cy.get('[data-test="submit-contact-form"]').should("be.disabled");
  });
  it("should require customer to provide a valid email when submitting form", () => {
    cy.visit("/");
    cy.get("#books").scrollIntoView();
    cy.get("#email").type("rosa");
    cy.get('[data-test="submit-contact-form"]').should("be.disabled");
  });
});
