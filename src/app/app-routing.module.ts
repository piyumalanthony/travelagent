import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddContractComponent} from './add-contract/add-contract.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [ { path: '', component: HomeComponent },
{ path: 'addcontract', component: AddContractComponent },
{ path: 'search', component: SearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
