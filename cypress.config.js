const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        viewportHeight: 900,
        viewportWidth: 720,
        projectId: "bu3ffx",
        // ...rest of the Cypress project config
        //  CYPRESS_RECORD_KEY: 18e7c390-4023-457f-87f4-3a36482b4863
        // npx cypress run --record --key 18e7c390-4023-457f-87f4-3a36482b4863
        baseUrl: 'http://barrigareact.wcaquino.me',
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
});
