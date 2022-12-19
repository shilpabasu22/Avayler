export const goToPage = (url) =>{
    cy.clearCookies();
    cy.visit(url);
    // cy.checkA11y();
    // cy.htmlvalidate();
}