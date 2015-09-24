import {Phony} from 'test_object';
import $ from 'jquery';
import jf from 'searls/jasmine-fixture';

describe("Mortgage Calculator Dialog", () => {
  beforeEach(() => {
    jf.affix('form#mortgage input[name="homeCost"] input[name="interest"] input[name="term"] span#result');
  });

  it("updates the mortgage payment to 0 when all the values are 0", () => {
    $('input[name="mortage-calculator"]').val(0);
    $('input[name="homeCost"]').val(0);
    $('input[name="term"]').val(0);

    $("#mortgage-calculator").submit();

    expect($('#span').text()).toEqual("0");
  });
});

