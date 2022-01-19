describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://Localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      body: {
        'orders': [
          {
            'id': 1,
            'ingredients': ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno'],
            'name': 'Pat'
          },
          {
            'id': 2,
            'ingredients': ['steak', 'pico de gallo', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno'],
            'name': 'Sam',
          },
          {
            'id': 3,
            'ingredients': ['sofritas', 'beans', 'sour cream', 'carnitas', 'queso fresco'],
            'name': 'Alex'
          }
        ]
      }
    })
  });

  it('should display a header and a form upon visiting the app', () => {
    cy.get('h1').contains('Burrito Builder');
    cy.get('form').contains('beans');
  });

  it('should display a list of orders', () => {
    cy.get('#orderSection').children('.order').should('have.length', 3);
    cy.get('.order').first().contains('Pat');
  });

  it('should be able to select the name input, fill it out, and choose from the different ingredients', () => {
    cy.get('input[type="text"]').type('Ricardo').should('have.value', 'Ricardo')
    cy.get('button').contains('beans').click();
    cy.get('button').contains('steak').click();
    cy.get('button').contains('guacamole').click();
    cy.get('button').contains('sour cream').click();
  });

  it('should be able to submit an order and display it', () => {
    cy.get('input[type="text"]').type('Ricardo').should('have.value', 'Ricardo')
    cy.get('button').contains('beans').click();
    cy.get('button').contains('steak').click();
    cy.get('button').contains('guacamole').click();
    cy.get('button').contains('sour cream').click();
    cy.get('button').contains('Submit Order').click()
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        name: 'Ricardo',
        ingredients: ['beans', 'steak', 'guacamole', 'sour cream']
      }
    });
    cy.get('#orderSection').children('.order').should('have.length', 4)
    cy.get('#orderSection').children('.order').last().contains('Ricardo')
  })
})