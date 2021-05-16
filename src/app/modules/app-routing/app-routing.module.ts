import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
