import {MortgageCalculatorDlg} from 'mortgage_calculator_dlg';
import $ from 'jquery';

describe('Mortgage Calculator Dialog', () => {
  beforeEach(() => {
    $("body").append("<div id='test'>");
    $("#test").append("<form id='mortgage'>" +
        "<input name='homeCost' />" +
        "<input name='downPayment' />" +
        "<input name='interest' />" +
        "<input name='term' />" +
      "</form>" +
      "<span id='result'></span>");
    MortgageCalculatorDlg.init($("#mortgage"));
  });

  afterEach(() => {
    $("#test").remove();
  });

  it('updates the mortgage payment to 0 when all the values are 0', () => {
    $('input[name="homeCost"]').val(0);
    $('input[name="interest"]').val(0);
    $('input[name="term"]').val(0);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('0.00');
  });

  it('has the mortgage payment of the home cost when there is only one payment', () => {
    $('input[name="homeCost"]').val(100000);
    $('input[name="interest"]').val(0);
    $('input[name="term"]').val(0);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('100000.00');
  });

  it('only gets stuff from the form, not just any input', () => {
    $("#test").prepend("<input name='homeCost' />");
    $('input[name="homeCost"]').val(1);
    $('#mortgage input[name="homeCost"]').val(1000);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('1000.00');
  });

  it('respects the term (in years), with 0 for the interest rate', () => {
    $('input[name="homeCost"]').val(1200);
    $('input[name="interest"]').val(0);
    $('input[name="term"]').val(1);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('100.00');
  });

  it('respects the term and the interest rate (monthly)', () => {
    $('input[name="homeCost"]').val(100000);
    $('input[name="interest"]').val(3.92);
    $('input[name="term"]').val(30);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('472.81');
  });

  it('respects the down payment', () => {
    $('input[name="homeCost"]').val(1200);
    $('input[name="downPayment"]').val(200);
    $('input[name="interest"]').val(0);
    $('input[name="term"]').val(0);

    $('#mortgage').submit();

    expect($('#result').text()).toEqual('1000.00');
  });

});
