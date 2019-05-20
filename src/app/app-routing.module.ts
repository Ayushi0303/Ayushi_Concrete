import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MixSearchComponent} from './mixes/mix-search/mix-search.component';
import {CreateMixComponent} from './mixes/create-mix/create-mix.component';
import {CopyMixDesignComponent} from './mixes/copy-mix-design/copy-mix-design.component';
import {MixMaterialListingComponent} from './mixes/mix-material-listing/mix-material-listing.component';
import {MixDescriptionsComponent} from './mixes/mix-descriptions/mix-descriptions.component';
import {CheckPlantMixDesignComponent} from './mixes/check-plant-mix-design/check-plant-mix-design.component';
import {MixDesignCostsComponent} from './mixes/mix-design-costs/mix-design-costs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'login', component: LoginComponent  },
  { path:'register', component: RegisterComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'mix-search', component: MixSearchComponent },
  { path:'create-mix', component: CreateMixComponent },
  { path:'copy-mix-design', component: CopyMixDesignComponent },
  { path:'mix-material-listing', component: MixMaterialListingComponent },
  { path:'mix-descriptions', component: MixDescriptionsComponent },
  { path:'check-plant-mix-design', component: CheckPlantMixDesignComponent },
  { path:'mix-design-costs', component: MixDesignCostsComponent },
  { path:'**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
