import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { FeVoucherComponent } from './feVoucher/feVoucher.component';
import { MessNewMembershipComponent } from './mess-new-membership/mess-new-membership.component';
import { TcComponent } from './tc/tc.component';
import { TockenComponent } from './tocken/tocken.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feeVoucher',
    pathMatch: 'full',
  },
  {
    path: 'feeVoucher',
    component: FeVoucherComponent,
  },
  {
    path: 'tocken',
    component: TockenComponent,
  },
  {
    path: 'admissionForm',
    component: AdmissionFormComponent,
  },
  {
    path: 'tc',
    component: TcComponent,
  },
  {
    path: 'newMembership',
    component: MessNewMembershipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
