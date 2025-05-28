const sessionPath = 'cypress/fixtures/session.json';

describe('Dashboard Tests', () => {
  beforeEach(() => {
    // Restore session before each test
    cy.readFile(sessionPath).then((sessionData) => {
      cy.visit('https://team.vedak.com/app/dashboard', {
        onBeforeLoad(win) {
          Object.entries(sessionData).forEach(([key, val]) => {
            win.localStorage.setItem(key, val);
          });
        },
      });
    });
  });

  it('✅ Validate logo and click Performance Alert', () => {
    cy.url({ timeout: 60000 }).should('include', '/app/dashboard');
    cy.xpath('//img[@title="Vedak"]', { timeout: 60000 }).should('be.visible');
    cy.wait(1000);
    cy.log('Clicked Vedak Logo');

    cy.xpath("//button[normalize-space()='Performance Alert']", { timeout: 60000 })
      .should('be.visible')
      .click();

    cy.wait(1000);
    cy.log('Clicked Performance Alert button');
  });

  // Add other dashboard tests here
});
