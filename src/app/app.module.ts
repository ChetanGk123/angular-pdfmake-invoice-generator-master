import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FeVoucherComponent } from './feVoucher/feVoucher.component';
import { AppRoutingModule } from './app-routing.module';
import { TcComponent } from './tc/tc.component';
@NgModule({
  declarations: [
    AppComponent,
      FeVoucherComponent,
      TcComponent
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
