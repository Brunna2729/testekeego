describe('Teste QA', () => {
    it('Pesquisar produto no site através de uma palavra-chave', () => {
      cy.visit('https://advantageonlineshopping.com/#/');
      cy.get('input[name="mobile_search"]').click().type('phone{enter}');
    
    })
  })