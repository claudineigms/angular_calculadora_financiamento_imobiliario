import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ValueSelectorComponent } from './value-selector/value-selector.component';
import { ValueSelectorInstallmentsComponent } from './value-selector-installments/value-selector-installments.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ValueSelectorComponent,
    ValueSelectorInstallmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
