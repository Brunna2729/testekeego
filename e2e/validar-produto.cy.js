describe('Teste QA', () => {
    it('Validar produto no carrinho', () => {
      cy.visit('https://advantageonlineshopping.com/#/');
      cy.get('input[name="mobile_search"]').click().type('phone{enter}');
      cy.get('#15').click();
      cy.get('button[name="save_to_cart"]').click();
      cy.get('#menuCart').click();
      cy.contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES').should('be.visible');
      cy.contains('TOTAL: $179.99').should('be.visible');
    })
  })