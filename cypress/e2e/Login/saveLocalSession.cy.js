describe('Manual Google Login and Save Session', () => {
    it('Logs in and saves session data after 2FA', () => {
      cy.visit('http://localhost:5173/app/dashboard')
  
      // Manually complete Google login with 2FA
      cy.pause() // 🔴 Pause test until YOU confirm you're logged in (visually)
  
      // Wait a little more after login to make sure storage is set
      cy.wait(3000)
  
      // Save session (no URL check here!)
      cy.window().then((win) => {
        const sessionData = { ...win.localStorage }
        cy.writeFile('cypress/fixtures/local_session.json', sessionData)
      })
    })
  })
  