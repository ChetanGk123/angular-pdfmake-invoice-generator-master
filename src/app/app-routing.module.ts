import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdmissionFormComponent } from "./admission-form/admission-form.component";
import { FeVoucherComponent } from "./feVoucher/feVoucher.component";
import { TcComponent } from "./tc/tc.component";


const routes: Routes = [
  {
    path: "",
    redirectTo:"feeVoucher",
    pathMatch: "full",
  },
  {
    path:"feeVoucher",
    component:FeVoucherComponent
  },
  {
    path:"admissionForm",
    component:AdmissionFormComponent
  },
  {
    path:"tc",
    component:TcComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
