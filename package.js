Package.describe({
  name: 'romyngo:chartjs',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Chart.js meteor wrapper',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/romyngo/Chart.js.git',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['chartjs.js', 'Chart.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('romy:chartjs');
  api.addFiles('chartjs-tests.js', 'client');
});
