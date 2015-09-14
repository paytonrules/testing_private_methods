Basic setup for a simple JS project:

While writing examples for my blog I needed a simple getting started for JS projects. I had a few rules:
- It needed to use ES6 imports (and by extension ES6) out of the box.
- Tests in Browser and in CI
- It needed to setup tests, allowing those to import needed files.
- It needed a simple autorunner for tests and code.
- It needed to let me add files on the fly, without updating HTML or some config. I'm lazy that way.
- It should NOT need to concatenate the files to run tests or develop.
- It should not require a framework.
- Given a choice between simple and complicated, simple won.

My usual standard, lineman, did not allow me to use ES6 imports and discouraged the practice. Yeoman's web generator was close but didn't easily let me setup testability. So finally I wrote my own.

Blog should mention jspm/jspm-cli

Tools:
- jspm.io and SystemJS http://developer.telerik.com/featured/choose-es6-modules-today
- http://developer.telerik.com/featured/choose-es6-modules-today/
- Getting Jasmine working with SystemJS http://www.brassington.io/javascript/jasmine-with-systemjs/. Note you can configure baseUrl
- Make config comon amongst both so imports work
- Import all files in spec directory when running tests
- Reload on all file changes in src or spec
- Don't forget a bundler
- http://www.brassington.io/javascript/jasmine-with-systemjs/ For the window.onload trick at the bottom
- What's the reasoning behind System.import


Steps:
  npm install
  npm install jspm/jspm-cli -g
