const BASE_URL = 'https://willgoncruz.github.io/desafio-warren-web/';

describe('Visiting the transaction', () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
        cy.wait(3000);
    });

    it('Go to details of created transaction', () => {
        const id = '5f89f9f20caef3ce2156509b';
        const link = cy.get(`[data-id=${id}]`);
        link.should('have.length', 1);
        link.click();

        cy.url().should('include', `/transaction/${id}`);

        cy.get('h1').contains('Resgate');
        cy.get('input[type=range]').should('have.value', 0);

        const value = cy.get('h2:first').next().next();
        value.contains('30043.32');
    });

    it('Go to details of processed transaction', () => {
        const id = '5f89f9f2b882c64b35295937';
        const link = cy.get(`[data-id=${id}]`);
        link.should('have.length', 1);
        link.click();

        cy.url().should('include', `/transaction/${id}`);

        cy.get('h1').contains('Resgate');
        cy.get('input[type=range]').should('have.value', 100);

        const value = cy.get('h2:first').next().next();
        value.contains('4839.17');
    });
});