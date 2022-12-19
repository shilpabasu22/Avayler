import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {goToPage} from "../../support/common/go-to-page";
import {verifyMenuItems} from "../../support/common/verify-menu-items";

Given('I navigate to Home page',()=>{
goToPage('/');
});

When('I search for {string} item',(menu)=>{
verifyMenuItems(menu);
})

Then('I am displayed the {string}',(url)=>{
    cy.url().should('equal',url);
})