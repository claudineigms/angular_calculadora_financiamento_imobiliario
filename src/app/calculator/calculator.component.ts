import { Component, Input, ViewChild } from '@angular/core';
import { OnInit,AfterContentInit,AfterContentChecked,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit,AfterContentChecked{
propertyValue:number = 100000
entryValuePercentage:number = 20;
installmentPercentage:number = 40;
annualInstallmentsPercentage:number = 20;
deliveryKeysPercentage:number = 0

installmentsMultiplyer:number = 12
annualinstallmentsMultiplyer:number = 1

calculateValues():void {
  this.deliveryKeysPercentage = 100 - this.entryValuePercentage - this.installmentPercentage - this.annualInstallmentsPercentage
}

ngOnInit(): void {
  this.calculateValues()
}

ngAfterContentChecked(): void {
  this.deliveryKeysPercentage = this.propertyValue - this.entryValuePercentage
  this.calculateValues()
}
}
