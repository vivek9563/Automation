const sessionPath = 'cypress/fixtures/session.json';

describe('Vedak - Reused Session Test with Dashboard Interactions', () => {
  it('✅ Should restore session, validate logo, and click Performance Alert', () => {
    cy.readFile(sessionPath).then((sessionData) => {
      cy.visit('https://team.vedak.com/app/dashboard', {
        onBeforeLoad(win) {
          Object.entries(sessionData).forEach(([key, val]) => {
            win.localStorage.setItem(key, val);
          });
        },
      });

      // ✅ Wait for dashboard to load
      cy.url({ timeout: 90000 }).should('include', '/app/dashboard');

      // ✅ Confirm logo is visible
      cy.xpath('//img[@title="Vedak"]', { timeout: 90000 }).should('be.visible');
      cy.log('Verified Vedak logo is visible');

      // ✅ Click "Performance Alert" button (XPath version)
      cy.xpath("//button[normalize-space()='Performance Alert']", { timeout: 90000 })
        .should('be.visible')
        .click();
        cy.log("Clicked Performance Alert button");
      
      // Click "Project Feedback button"
      cy.xpath("//button[normalize-space()='Project-Feedback']", { timeout: 90000})
      .should('be.visible')
      .click();
      cy.log('Clicked Project Feedback button');
    });
  });
});

