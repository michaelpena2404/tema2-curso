describe('Login Sauce Demo', () => {

  beforeEach(() => {
    const url = 'https://www.saucedemo.com/'
    cy.viewport(1280, 720)
    cy.visit(url)
  })

  it('Debe logearse correctamente con credenciales válidas', () => {
    const user = 'standard_user'
    const password = 'secret_sauce'
    cy.get('input[data-test="username"]').type(user)
    cy.get('input[data-test="password"]').type(password)
    cy.get('input[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('span[data-test="title"]').should('have.text', 'Products')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length', 6)
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
    cy.get('[data-test="item-4-title-link"] [data-test="inventory-item-name"]').click();
  })

  it('Debe logearse ordenar con el filtro Z-A', () => {
    const user = 'standard_user'
    const password = 'secret_sauce'
    cy.get('input[data-test="username"]').type(user)
    cy.get('input[data-test="password"]').type(password)
    cy.get('input[data-test="login-button"]').click()
    cy.get('.product_sort_container').select('Name (Z to A)')
    cy.url().should('include', '/inventory.html')
    cy.get('span[data-test="title"]').should('have.text', 'Products')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length', 6)
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })
});