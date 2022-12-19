// @ts-ignore
const defineConfig = require("cypress");
// @ts-ignore
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
// @ts-ignore
const htmlvalidate = require('cypress-html-validate/plugin').default;
// @ts-ignore
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(on:Cypress.PluginEvents, config:Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions>  {
    // @ts-ignore
    const options = {
        typescript: require.resolve("typescript"),
    };
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", browserify(config,options));
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    });
    htmlvalidate.install(on, null, {
        exclude: [],
        include: [],
    });
    return config;
};

module.exports = {
    e2e: {
        specPattern: '**/*.feature',
        chromeWebSecurity: false,
        baseUrl: 'https://www.avayler.com',
        viewportWidth: 1024,
        viewportHeight: 1600,
        video: true,
        responseTimeout: 60000,
        defaultCommandTimeout: 6000,
        setupNodeEvents,
        retries:{
            openMode:0,
            runMode:1
        }
    },
};
