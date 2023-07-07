import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-angular';

  calcValue: number = 0;
  firstNumber: number = 0;
  secondNumber: number = 0;
  funcT: any = "noFunction";

  calcNumber: string = "noValue"

  onClickValue (val: string, type: any) {
    console.log(val, type)
    if(type === "number"){
      this.onNumberClick(val);
    } else if (type === "function"){
      this.onFunctionClick(val);
    };
  }

  onNumberClick(val:string){
    if(this.calcNumber != 'noValue'){
      this.calcNumber = this.calcNumber + val;
    } else {
      this.calcNumber = val;
    }
    this.calcValue = parseFloat(this.calcNumber)
  }

  onFunctionClick(val:string){
    if(this.funcT == "noFunction"){
      this.firstNumber = this.calcValue
      this.calcValue = 0;
      this.calcNumber = "noValue";
      this.funcT = val;
    }else {
      this.secondNumber = this.calcValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if( this.funcT == "+"){
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValue(total, val)
    } else if( this.funcT == "-"){
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValue(total, val)
    } else if( this.funcT == "*"){
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValue(total, val)
    } else if( this.funcT == "/"){
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValue(total, val)
    } else if( this.funcT == "%"){
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValue(total, val)
    } else if( this.funcT == "c"){
      this.clearAll()
    }
  }

  totalAssignValue(total: number, val: string) {
    this.calcValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calcNumber = "noValue";
    this.funcT = val;
    if( val == "="){ this.onEquelPress() }
  }

  onEquelPress () {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calcNumber = "noValue";
    this.funcT = "noFunction";
  }
  
  clearAll () {
    this.calcValue = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calcNumber = "noValue";
    this.funcT = "noFunction";
  }
}
