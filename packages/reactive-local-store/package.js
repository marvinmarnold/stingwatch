Package.describe({
  name: 'reactive-local-store',
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
  api.mainModule('reactive-local-store.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('reactive-local-store');
  api.mainModule('reactive-local-store-tests.js');
});
