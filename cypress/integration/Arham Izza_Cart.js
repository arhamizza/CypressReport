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

describe('menghapus belanjaan ', () => {
    it('TestCase2', () => {
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
        //klik Remove
        cy.get('#remove-sauce-labs-backpack').click()
        //klik Continue shopping
        cy.get('#continue-shopping').click()
    })
  })


describe('Setelah menambah belajaan lalu logout ', () => {
    it('TestCase3', () => {
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
        //klik produk
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        //klik tombol cart
        cy.get('.shopping_cart_link').click()
        //klik tombol menu
        cy.get('#react-burger-menu-btn').click()
        //klik logout
        cy.get('#logout_sidebar_link').click()
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
        //klik tombol cart
        cy.get('.shopping_cart_link').click()

        
    })
})

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

describe('Checkout Tanpa menambah belanjaan ', () => {
    it('TestCase5', () => {
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
      //klik tombol cart
      cy.get('.shopping_cart_link').click()
      //klik Checkout
      cy.get('#checkout').click()
    })
  })