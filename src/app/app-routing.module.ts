import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { VendorRegisterComponent } from './vendor/vendor-register/vendor-register.component';
import { SelectForRegComponent } from './main/select-for-reg/select-for-reg.component';
import { MainComponent } from './admin/main/main.component';
import { BillboardComponent } from './main/billboard/billboard.component';
import { DigitalBillboardComponent } from './main/digital-billboard/digital-billboard.component';
import { NewspaperComponent } from './main/newspaper/newspaper.component';
import { TvcComponent } from './main/tvc/tvc.component';
import { ShowDetailsComponent } from './main/show-details/show-details.component';
import { PostAddComponent } from './vendor/post-add/post-add.component';
import { UserManagementComponent } from './vendor/user-management/user-management.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ViewAdDetailsComponent } from './admin/view-ad-details/view-ad-details.component';
import { GetQuotationComponent } from './vendor/get-quotation/get-quotation.component';
import { ViewQuotationComponent } from './vendor/view-quotation/view-quotation.component';
import { PromoteAdComponent } from './vendor/promote-ad/promote-ad.component';
import { AdUpdateComponent } from './vendor/ad-update/ad-update.component';
import { AdminNewspaperComponent } from './admin/admin-newspaper/admin-newspaper.component';
import { ViewNewspaperDataComponent } from './admin/view-newspaper-data/view-newspaper-data.component';
import { ShowPromotionComponent } from './admin/show-promotion/show-promotion.component';
import { HireAdComponent } from './vendor/hire-ad/hire-ad.component';
import { PrintInvoiceComponent } from './vendor/print-invoice/print-invoice.component';


const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'vendorsignup',component: VendorRegisterComponent},
  { path : 'select', component:SelectForRegComponent},
  { path : 'admin', component:MainComponent},
  { path : 'billboard', component:BillboardComponent},
  { path : 'digital-billboard',component: DigitalBillboardComponent},
  { path : 'newspaper',component:NewspaperComponent},
  { path : 'tvc',component:TvcComponent},
  { path : 'show-details/:id',component:ShowDetailsComponent},
  { path : 'post-ad', component:PostAddComponent},
  { path : 'ad-update/:adId', component:AdUpdateComponent},
  { path :'vendor', component: UserManagementComponent },
  { path :'admin-login', component:AdminLoginComponent},
  { path : 'view-data/:id', component: ViewAdDetailsComponent},
  { path : 'quotations',component:GetQuotationComponent},
  { path : 'view-details/:quotationId',component:ViewQuotationComponent},
  { path : 'promote-ad/:adId',  component:PromoteAdComponent},
  { path : 'admin-newspaper',  component:AdminNewspaperComponent},
  { path : 'newspaper-ad/:id', component:ViewNewspaperDataComponent},
  { path : 'show-Promotion', component: ShowPromotionComponent},
  { path : 'hire-ad', component:HireAdComponent},
  { path : 'print-invoice/:adId', component:PrintInvoiceComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
