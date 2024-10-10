module.exports = {
    e2e: {
      reporter: 'cypress-multi-reporters',
      reporterOptions: {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: true,
          charts: true
        }
      }
    }
  }
  