/// <reference types="cypress" />

describe("contracthero-pdf-challenge", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should upload a simple pdf file and output the parsed contents", () => {
    // for some reason the provided "test.pdf" cant be just attached. works with other pdfs though. probably a encoding issue
    cy.fixture("sample_1.pdf", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((content) => {
        cy.get("input[type=file]").attachFile({
          fileContent: content,
          fileName: "sample_1.pdf",
          mimeType: "application/pdf",
          encoding: "utf8",
        });
      });

    cy.get("textarea").should("have.value", "Test");
  });

  it("should correctly show multiple pages in distinct textareas", () => {
    cy.get("input[type=file]").attachFile("sample_2.pdf");
    cy.get("h2").should("have.length", 2);
    cy.get("textarea").should("have.length", 2);

    cy.get("h2").each(($el, idx) => {
      cy.wrap($el).should("have.text", `Page ${idx + 1}`);
    });

    const dummyText = [
      "A Simple PDF File\n\nThis is a small demonstration .pdf file -\njust for use in the Virtual Mechanics tutorials. More text. And more\ntext. And more text. And more text. And more text.\nAnd more text. And more text. And more text. And more text. And more\ntext. And more text. Boring, zzzzz. And more text. And more text. And\nmore text. And more text. And more text. And more text. And more text.\nAnd more text. And more text.\nAnd more text. And more text. And more text. And more text. And more\ntext. And more text. And more text. Even more. Continued on page 2 ...",
      "Simple PDF File 2\n\n...continued from page 1. Yet more text. And more text. And more text.\nAnd more text. And more text. And more text. And more text. And more\ntext. Oh, how boring typing this stuff. But not as boring as watching\npaint dry. And more text. And more text. And more text. And more text.\nBoring. More, a little more text. The end, and just as well.",
    ];

    cy.get("textarea").each(($el, idx) => {
      cy.wrap($el).should("have.value", dummyText[idx]);
    });
  });

  it("should clear textareas once we invoke clear", () => {
    cy.get("input[type=file]").attachFile("sample_2.pdf");
    cy.get("textarea").should("have.length", 2);
    cy.get("button").contains("Clear").click();
    cy.get("textarea").should("not.exist");
  });
});
