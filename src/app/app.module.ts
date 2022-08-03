import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FeVoucherComponent } from './feVoucher/feVoucher.component';
import { AppRoutingModule } from './app-routing.module';
import { TcComponent } from './tc/tc.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { MessNewMembershipComponent } from './mess-new-membership/mess-new-membership.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FeVoucherComponent,
    TcComponent,
    AdmissionFormComponent,
    MessNewMembershipComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
