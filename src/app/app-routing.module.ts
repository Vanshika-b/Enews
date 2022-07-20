import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [
  {path:'', component:TopheadlinesComponent}, //top headlines & home
  {path:'tech news',component:TechComponent},
  {path:'business news',component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
