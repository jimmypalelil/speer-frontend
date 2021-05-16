import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
