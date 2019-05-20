import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './includes/header/header.component';
import { LeftmenuComponent } from './includes/leftmenu/leftmenu.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MixSearchComponent } from './mixes/mix-search/mix-search.component';
import { CreateMixComponent } from './mixes/create-mix/create-mix.component';
import { CopyMixDesignComponent } from './mixes/copy-mix-design/copy-mix-design.component';
import { MixMaterialListingComponent } from './mixes/mix-material-listing/mix-material-listing.component';
import { MixDescriptionsComponent } from './mixes/mix-descriptions/mix-descriptions.component';
import { CheckPlantMixDesignComponent } from './mixes/check-plant-mix-design/check-plant-mix-design.component';
import { MixDesignCostsComponent } from './mixes/mix-design-costs/mix-design-costs.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    LeftmenuComponent,
    FooterComponent,
    MixSearchComponent,
    CreateMixComponent,
    CopyMixDesignComponent,
    CheckPlantMixDesignComponent,
    MixDescriptionsComponent,
    MixMaterialListingComponent,
    MixDesignCostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }