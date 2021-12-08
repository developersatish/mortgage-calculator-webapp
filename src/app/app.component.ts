import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component-default.scss', './app.component.scss']
})
export class AppComponent {
  title = 'mortgage-calculator-webapp';


  min = 0;
  max = 2000;
  step = 1;
  purchage_price = 0;
  down_payment = 0;
  repayment_time = 1;
  interest_rate = 1;
  load_amount = 1;
  per_month = 1;

  formatLabel(value: number) {
    return value;
  }
  calculate() {

    this.load_amount = this.purchage_price - this.down_payment;
    const p = this.load_amount;
    const i = this.interest_rate / 100 / 12;
    const n = this.repayment_time;

    this.per_month = this.monthlyPayment(p, n, i);
  }
  monthlyPayment(p: number, n: number, i: number) {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }
}
