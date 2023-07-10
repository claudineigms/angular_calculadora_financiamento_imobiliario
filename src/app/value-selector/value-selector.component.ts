import { Component, EventEmitter, Input, Output, AfterContentChecked, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-value-selector',
  templateUrl: './value-selector.component.html',
  styleUrls: ['./value-selector.component.css','../app.component.css']
})
export class ValueSelectorComponent implements AfterContentChecked, OnInit{
  timeout: any = null;
  @Input()  title: string = "";
  @Input()  ValueBarNgIf: boolean|string= true
  @Input()  ValueStatusDisabled: boolean|string= false
  @Input()  cubValue: number = 0
  @Input()  cubInstallmentValue: number = 0

  @Input()  percentage!: number;
  @Output()  percentageChange = new EventEmitter<number>();
  @Input()  maxPercentage!: number|string
  @Input()  totalAmount!: number;
  @Output() totalAmountChange = new EventEmitter<number>();
            installmentValue!: number;

  calculateCub():void{this.cubInstallmentValue = Number((this.installmentValue/this.cubValue).toFixed(5))}
  calculateInstallment():void{
    this.installmentValue = (this.installmentValue > this.totalAmount*(Number(this.maxPercentage)/100)) ? this.installmentValue = Number((this.totalAmount * (this.percentage / 100)).toFixed(0)) : this.installmentValue
  }

  ngOnInit():void{
    this.installmentValue = this.totalAmount*(Number(this.maxPercentage)/100)
    this.calculateCub()
  }

  calculatePercentage():void{
    this.percentage = Number(((this.installmentValue/this.totalAmount)*100).toFixed(5))
    this.calculateCub()
  }


  calculateInstallmentValueByCub(event: any){
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing();
      }
    }, 1000);
  }

  executeListing(){
    this.installmentValue = this.cubInstallmentValue * this.cubValue
    this.calculatePercentage()
  }

  ngAfterContentChecked(): void {
    this.installmentValue = Number((this.totalAmount*(Number(this.percentage)/100)).toFixed(0))
    this.calculateCub()
    this.totalAmountChange.emit(this.totalAmount)
    this.percentageChange.emit(this.percentage)
  }
}
