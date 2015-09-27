export class MortgageCalculatorDlg {
  static init($mortgageForm) {
    $mortgageForm.submit((evt) => {
      var mortgage = $mortgageForm.find('input[name="homeCost"]').val();
      var term = $mortgageForm.find('input[name="term"]').val() * 12;
      var interest = $mortgageForm.find('input[name="interest"]').val() / 100 / 12;

      if (term == 0) {
        $("#result").text(mortgage);
      }
      else if (interest == 0) {
        $("#result").text(mortgage / term);
      } else {
        var interestPower = Math.pow(1 + interest, term);
        var interestTimesInterestPower = interest * interestPower;
        var payment = (mortgage * interestTimesInterestPower) /
          (interestPower - 1);

        $("#result").text(payment.toFixed(2));
      }
      evt.preventDefault();
    });
  }
};
