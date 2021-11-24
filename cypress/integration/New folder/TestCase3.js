//Nama          : Arham Izza Syany
//NIM/N0        : 1941720127 (03)
//Kelas         : TI-3B
//Test Case     : Setelah menambah belajaan lalu logout 

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