import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchContractsComponent } from './search-contracts/search-contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContractComponent,
    SearchComponent,
    HomeComponent,
    NavComponent,
    SearchContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
