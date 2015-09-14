Promise.all( [
    System.import('../spec/phony_test.js'),
    System.import('../spec/next_phony_test.js')]).then(window.onload);
