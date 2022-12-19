export const aboutUs = () => cy.findByRole('button',{name:/About Us/i});
export const products = () => cy.findByRole('button',{name:'Products'});
export const industries = () => cy.findByRole('button',{name:'Industries'});
export const contactUs = () => cy.findByRole('link',{name:'Contact Us'});
export const resourceCenter = () => cy.findByRole('link',{name:'Resource Center'});