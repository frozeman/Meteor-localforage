Package.describe({
  name: 'raix:localforage',
  version: '1.2.6',
  summary: "Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.",
  git: 'http://github.com/raix/Meteor-localforage'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.add_files('localforage.js', 'client');

  // api.export('localforage', 'client');
});