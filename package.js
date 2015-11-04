Package.describe({
  name: 'compstak:lease-format',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor packagae wrapper for lease-format npm module',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('ecmascript');
  api.addFiles('lease-format.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('compstak:lease-format');
  api.addFiles('lease-format-tests.js');
});
