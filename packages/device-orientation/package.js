Package.describe({
  name: 'device-orientation',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use(['ecmascript', 'underscore', 'session']);
  api.mainModule('device-orientation.js', ['client', 'web.cordova', 'web.browser']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('device-orientation');
  api.mainModule('device-orientation-tests.js', 'client');
});
