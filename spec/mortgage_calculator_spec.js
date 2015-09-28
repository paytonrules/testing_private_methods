import {MortgageCalculator} from 'mortgage_calculator';

describe('MortgageCalculator', () => {

  it('subtracts the down payment from the mortgage', function() {
    var calculator = new MortgageCalculator({
      homeCost: 110000,
      downPayment: 10000,
      termInMonths: 360,
      interestPerMonth: 0.003266666667
    })

    expect(calculator.payment()).toEqual(472.814731573836);
  });
});
