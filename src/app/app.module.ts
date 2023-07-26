import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/main/home/home.component';
import { VendorRegisterComponent } from './vendor/vendor-register/vendor-register.component';
import { LoginComponent } from './main/login/login.component';
import { SelectForRegComponent } from './main/select-for-reg/select-for-reg.component';
import { MainComponent } from './admin/main/main.component';
import { UserManagementComponent } from './vendor/user-management/user-management.component';
import { PostAddComponent } from './vendor/post-add/post-add.component';
import { HttpClientModule } from '@angular/common/http';
import { BillboardComponent } from './main/billboard/billboard.component';
import { DigitalBillboardComponent } from './main/digital-billboard/digital-billboard.component';
import { NewspaperComponent } from './main/newspaper/newspaper.component';
import { TvcComponent } from './main/tvc/tvc.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { ShowDetailsComponent } from './main/show-details/show-details.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdUpdateComponent } from './vendor/ad-update/ad-update.component';
import { AdsComponent } from './admin/ads/ads.component';
import { ViewAdDetailsComponent } from './admin/view-ad-details/view-ad-details.component';
import { PromoteAdComponent } from './vendor/promote-ad/promote-ad.component';
import { GetQuotationComponent } from './vendor/get-quotation/get-quotation.component';
import { ViewQuotationComponent } from './vendor/view-quotation/view-quotation.component';
import { AdminNewspaperComponent } from './admin/admin-newspaper/admin-newspaper.component';
import { ViewNewspaperDataComponent } from './admin/view-newspaper-data/view-newspaper-data.component';
import { ShowPromotionComponent } from './admin/show-promotion/show-promotion.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VendorRegisterComponent,
    LoginComponent,
    SelectForRegComponent,
    MainComponent,
    UserManagementComponent,
    PostAddComponent,
    BillboardComponent,
    DigitalBillboardComponent,
    NewspaperComponent,
    TvcComponent,
    HeaderComponent,
    FooterComponent,
    ShowDetailsComponent,
    AdminLoginComponent,
    AdUpdateComponent,
    AdsComponent,
    ViewAdDetailsComponent,
    PromoteAdComponent,
    GetQuotationComponent,
    ViewQuotationComponent,
    AdminNewspaperComponent,
    ViewNewspaperDataComponent,
    ShowPromotionComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
