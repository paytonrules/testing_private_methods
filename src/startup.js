import 'bootstrap/css/bootstrap.css!';
import './css/styles.css!';
import $ from "jquery";
import {MortgageCalculatorDlg} from 'mortgage_calculator_dlg';

$(function() {
  MortgageCalculatorDlg.init($("#mortgage-calculator"));
});
