it ('Should check 5+2 equals 7', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5501/')
    // 2. Act
    cy.get('#five').click();
    cy.get('#plus').click();
    cy.get('#two').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    // cy.get('#input_box').should('contain', '5+2')
    cy.get('#input_box').should('contain', '7')
})
it ('Should check 5*2 equals 10', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5501/')
    // 2. Act
    cy.get('#five').click();
    cy.get('#times').click();
    cy.get('#two').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    // cy.get('#input_box').should('contain', '5+2')
    cy.get('#input_box').should('contain', '10')
})
it ('Should check 8/2 equals 4', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5501/')
    // 2. Act
    cy.get('#eight').click();
    cy.get('#divide').click();
    cy.get('#two').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    // cy.get('#input_box').should('contain', '5+2')
    cy.get('#input_box').should('contain', '4')
})