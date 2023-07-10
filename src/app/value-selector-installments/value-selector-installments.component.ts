import { Component, EventEmitter, Input, Output, OnInit,AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-value-selector-installments',
  templateUrl: './value-selector-installments.component.html',
  styleUrls: ['./value-selector-installments.component.css','../app.component.css']
})

export class ValueSelectorInstallmentsComponent implements OnInit,AfterContentChecked, AfterViewChecked{
  @Input()  title: string = "";
  @Input()  ValueBarNgIf: boolean|string= false
  @Input()  ValueStatusDisabled: boolean|string = false
  @Input()  cubValue: number = 0

  @Input()  multiplier: number = 1;
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();
  @Input()  percentage!: number;
  @Output() percentageChange = new EventEmitter<number>();
  @Input()  maxPercentage!: number|string
            installment! : number|string;
            cubInstallment! : number|string;
            option!:number;

  ngOnInit(): void {
    this.option = this.multiplier * 10
    this.calculateInstallment()
    this.calculateCubInstallment()
  }

  ngAfterContentChecked(): void {
    this.totalAmountChange.emit(this.totalAmount)
    this.percentageChange.emit(this.percentage)
  }

  calculateInstallment():void{this.installment = ((this.totalAmount*(this.percentage/100))/this.option)}
  calculateCubInstallment():void{this.cubInstallment = Number((Number(this.installment)/this.cubValue).toFixed(5));}

  calculateInstallments():void{
    if (typeof this.option === 'number'){
      this.calculateInstallment()
      this.calculateCubInstallment()
    }else{
      this.installment = 0
      this.cubInstallment = 0
    }
  }

  calculateByInstallment():void{
    this.calculateCubInstallment()
    this.percentage = ((Number(this.installment)*this.option)/this.totalAmount)*100
  }

  ngAfterViewChecked():void{
    this.calculateInstallment()
    this.calculateCubInstallment()
  }
}
