import { Component, EventEmitter, Input, Output, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-value-selector',
  templateUrl: './value-selector.component.html',
  styleUrls: ['./value-selector.component.css']
})
export class ValueSelectorComponent implements AfterContentChecked{
  @Input()  title: string = "";
  @Input()  installmentValue!: number;
  @Output() installmentValueChange = new EventEmitter<number>();
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();

  ngAfterContentChecked(): void {
    if (this.installmentValue > this.totalAmount){
      this.installmentValue = this.totalAmount
      console.log(this.totalAmount)
    }
    this.installmentValueChange.emit(this.installmentValue);
    this.totalAmountChange.emit(this.totalAmount)
  }




}
