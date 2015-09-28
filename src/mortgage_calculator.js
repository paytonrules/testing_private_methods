export class MortgageCalculator {

  constructor(options) {
    var downPayment = options.downPayment || 0;

    this.mortgageAmount = options.homeCost - downPayment;
    this.termInMonths = options.termInMonths;
    this.interestPerMonth = options.interestPerMonth;
  }

  payment() {
    if (this.termInMonths == 0) {
      return this.mortgageAmount;
    } else if (this.interestPerMonth == 0) {
      return this.mortgageAmount / this.termInMonths;
    } else {
      let interestPower = Math.pow(1 + this.interestPerMonth, this.termInMonths);
      let interestTimesInterestPower = this.interestPerMonth * interestPower;
      let payment = (this.mortgageAmount * interestTimesInterestPower) /
        (interestPower - 1);

      return payment;
    }
  }
}
