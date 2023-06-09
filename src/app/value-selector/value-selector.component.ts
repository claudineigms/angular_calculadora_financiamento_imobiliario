import { Component, EventEmitter, Input, Output, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-value-selector',
  templateUrl: './value-selector.component.html',
  styleUrls: ['./value-selector.component.css']
})
export class ValueSelectorComponent implements AfterContentChecked{
  @Input()  title: string = "";
  @Input()  ValueBarNgIf: boolean|string= true
  @Input()  ValueStatusDisabled: boolean|string= false

  @Input()  percentage!: number;
  @Output()  percentageChange = new EventEmitter<number>();
  @Input()  maxPercentage!: number|string
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();
            installmentValue!: number;

  calculatePercentage():void{
    console.log("tes")
    this.percentage = Number(((this.installmentValue/this.totalAmount)*100).toFixed(5))
    this.percentageChange.emit(this.percentage)
  }

  ngAfterContentChecked(): void {
    this.installmentValue = Number((this.totalAmount * (this.percentage / 100)).toFixed(2))
    this.totalAmountChange.emit(this.totalAmount)
    this.percentageChange.emit(this.percentage)
  }
}
