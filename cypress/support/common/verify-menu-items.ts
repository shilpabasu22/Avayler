import {aboutUs, contactUs, industries, products, resourceCenter} from "../page-objects/menu-page-objects";

export const verifyMenuItems =(menu)=>{
    switch(menu){
        case 'ABOUT US':
            aboutUs().should('be.visible').should('have.attr','href','https://www.avayler.com/about-us').click();
            break;
        case 'PRODUCTS':
            products().should('be.visible').should('have.attr','href','https://www.avayler.com/products').click();
            break;
        case 'INDUSTRIES':
            industries().should('be.visible').should('have.attr','href','https://www.avayler.com/industries').click();
            break;
        case 'RESOURCE CENTER':
            resourceCenter().should('be.visible').should('have.attr','href','https://www.avayler.com/resource-center').click();
            break;
        case 'CONTACT US':
            contactUs().should('be.visible').should('have.attr','href','https://www.avayler.com/contact-us').click();
            break;
    }
}