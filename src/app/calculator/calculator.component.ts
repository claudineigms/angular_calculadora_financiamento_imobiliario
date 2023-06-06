import { Component, Input, ViewChild } from '@angular/core';
import { OnInit,AfterContentInit,AfterContentChecked,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit,AfterContentChecked{
propertyValue:number = 100000
entryValue!:number;
installment!:number;
annualInstallments!:number
deliveryKeys:number = 0
installmentsMultiplyer:number = 12
annualinstallmentsMultiplyer:number = 1

calculateValues():void {
  this.deliveryKeys = this.propertyValue - this.entryValue - this.installment - this.annualInstallments
}

ngOnInit(): void {
  this.entryValue = this.propertyValue * .2
  this.installment = this.propertyValue * .4
  this.annualInstallments = this.propertyValue * .2
  this.calculateValues()
}

ngAfterContentChecked(): void {
  // console.log(this.entryValue)
  this.deliveryKeys = this.propertyValue - this.entryValue
  this.calculateValues()
}
}
