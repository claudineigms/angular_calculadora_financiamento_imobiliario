import { Component, EventEmitter, Input, Output, OnInit,AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-value-selector-installments',
  templateUrl: './value-selector-installments.component.html',
  styleUrls: ['./value-selector-installments.component.css']
})

export class ValueSelectorInstallmentsComponent implements OnInit,AfterContentChecked, AfterViewChecked{
  @Input()  title: string = "";
  @Input()  ValueBarNgIf: boolean|string= false
  @Input()  ValueStatusDisabled: boolean|string = false

  @Input()  multiplier: number = 1;
  @Output() multiplierChange = new EventEmitter<number>();
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();
  @Input()  percentage!: number;
  @Output() percentageChange = new EventEmitter<number>();
  @Input()  maxPercentage!: number|string
            installment! : number|string;
            option!:number;

  ngOnInit(): void {
    this.option = this.multiplier * 10
  }

  ngAfterContentChecked(): void {
    this.totalAmountChange.emit(this.totalAmount)
    this.multiplierChange.emit(this.multiplier)
    this.percentageChange.emit(this.percentage)
  }

  ngAfterViewChecked():void{
    this.installment = ((this.totalAmount*(this.percentage/100))/this.option).toLocaleString("pt-BR",{ style: "currency" , currency:"BRL"});
  }
}

