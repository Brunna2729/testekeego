describe('Teste QA', () => {
  it('Adicionar produto ao carrinho de compras', () => {
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get('input[name="mobile_search"]').click().type('phone{enter}');
    cy.get('#15').click();
    cy.get('button[name="save_to_cart"]').click();
  })
})