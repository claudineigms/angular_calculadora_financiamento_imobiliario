import { Component, EventEmitter, Input, Output, OnInit,AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-value-selector-installments',
  templateUrl: './value-selector-installments.component.html',
  styleUrls: ['./value-selector-installments.component.css']
})

export class ValueSelectorInstallmentsComponent implements OnInit,AfterContentChecked, AfterViewChecked{
  @Input()  title: string = "";
  @Input()  multiplier: number = 1;
  @Output() multiplierChange = new EventEmitter<number>();
  @Input()  installmentValue!: number;
  @Output() installmentValueChange = new EventEmitter<number>();
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();
            installment! : number;
            option!:number;

  ngOnInit(): void {
    this.option = this.multiplier * 10
  }

  ngAfterContentChecked(): void {
    if (this.installmentValue > this.totalAmount){
      this.installmentValue = this.totalAmount
      console.log(this.totalAmount)
    }
    this.installmentValueChange.emit(this.installmentValue);
    this.totalAmountChange.emit(this.totalAmount)
    this.multiplierChange.emit(this.multiplier)
  }

  ngAfterViewChecked():void{
    console.log(this.installmentValue)
    console.log(this.option)
    this.installment = this
    .installmentValue/this.option
  }
}

