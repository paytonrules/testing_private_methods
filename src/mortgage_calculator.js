export class MortgageCalculator {

  constructor(options) {
    this.homeCost = options.homeCost;
    this.termInMonths = options.termInMonths;
    this.interestPerMonth = options.interestPerMonth;
  }

  payment() {
    if (this.termInMonths == 0) {
      return this.homeCost;
    } else if (this.interestPerMonth == 0) {
      return this.homeCost / this.termInMonths;
    } else {
      let interestPower = Math.pow(1 + this.interestPerMonth, this.termInMonths);
      let interestTimesInterestPower = this.interestPerMonth * interestPower;
      let payment = (this.homeCost * interestTimesInterestPower) /
        (interestPower - 1);

      return payment;
    }
  }
}
