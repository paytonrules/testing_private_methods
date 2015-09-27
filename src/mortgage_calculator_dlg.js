import {MortgageCalculator} from 'mortgage_calculator';

export class MortgageCalculatorDlg {
  static init($mortgageForm) {
    let valAsNumber = function(sel) {
      return Number($mortgageForm.find(sel).val());
    };

    $mortgageForm.submit((evt) => {
      var homeCost = valAsNumber('input[name="homeCost"]');
      var term = valAsNumber('input[name="term"]') * 12;
      var interest = valAsNumber('input[name="interest"]') / 100 / 12;

      var calculator = new MortgageCalculator({
        homeCost: homeCost,
        termInMonths: term,
        interestPerMonth: interest
      });
      $("#result").text(calculator.payment().toFixed(2));
      evt.preventDefault();
    });
  }
};
