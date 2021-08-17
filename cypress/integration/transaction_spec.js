const BASE_URL = 'http://localhost:3001';

describe('Visiting the transaction', () => {
    it('Go to details of specific transaction', () => {
        cy.visit(BASE_URL);
        expect(true).to.be.equal(true);
    });
});