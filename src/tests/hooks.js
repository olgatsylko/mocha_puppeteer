const ui = require ('../app/ui');

exports.mochaHooks = {
  beforeAll: async function() {
    await ui.ph.launch();
    await ui.ph.create();
  },
  afterAll: function() {
    ui.ph.close()
    ui.ph.finish();
  }
};