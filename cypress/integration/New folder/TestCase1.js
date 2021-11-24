//Nama          : Arham Izza Syany
//NIM/N0        : 1941720127 (03)
//Kelas         : TI-3B
//Test Case     : Menambah belanjaan lalu Checkout

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
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      //klik tombol cart
      cy.get('.shopping_cart_link').click()
      //klik Checkout
      cy.get('#checkout').click()

  })
})