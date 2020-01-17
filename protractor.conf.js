const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
  baseUrl: 'https://recruitment.possible.cx/',
  directConnect: true,
  specs: ['src/spec/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['incognito', '--headless']
    }
  },
  params: {
    login: {
      usuario: 'paulo.goncalves',
      senha: 'svEvYx%86t'
    }
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayFailed: true,
          displayPending: true,
          displayDuration: true,
          displayStackTrace: true
        },
        summary: {
          displayFailed: true
        }
      })
    );
  },
  jasmineNodeOpts: {
    print: function() {}
  }
};
