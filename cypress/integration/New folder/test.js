describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('http://siakad.polinema.ac.id/')
  
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('[id="username"]').type('1941720127')
      cy.get('input[type="password"]').type('reddevil123')
      cy.get('.form-actions > .btn').click()
    })
  })