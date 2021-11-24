//Nama          : Arham Izza Syany
//NIM/N0        : 1941720127 (03)
//Kelas         : TI-3B
//Test Case     : Menambah belanjaan dengan cara mengklik produk dulu

describe('Menambah belanjaan dengan cara mengklik produk dulu', () => {
    it('TestCase4', () => {
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
        //klik gambar produk
        cy.get('#item_4_img_link > .inventory_item_img').click()
        //klik add cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        //klik tombol cart
        cy.get('.shopping_cart_link').click()
    })
  })