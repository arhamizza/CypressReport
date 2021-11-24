describe('Menambah belanjaan lalu Checkout', () => {
  it('TestCase1', () => {
    //masuk ke web saucedemo
    cy.visit('https://www.saucedemo.com/')
      //akses ke username
      cy.get('#user-name')
      //menulis username
      .type('standard_user')
       //akses ke password
      cy.get('#password')
      //menuliskan password
      .type('secret_sauce')
      //klik tombol login
      cy.contains('Login').click()
      //klik produk
      cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').click()

  })
})
