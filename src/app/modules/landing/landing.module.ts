import { NgModule } from '@angular/core';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import { SuperiorSoundComponent } from './components/superior-sound/superior-sound.component';
import { FrontRowSeatsComponent } from './components/front-row-seats/front-row-seats.component';
import {SharedModule} from "../common/shared.module";
import {CommonModule} from "@angular/common";

const routes = [
  {
    path: '',
    component: LandingPageComponent
  }
]

@NgModule({
  declarations: [
    ImageSliderComponent,
    LandingPageComponent,
    SuperiorSoundComponent,
    FrontRowSeatsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ]
})
export class LandingModule { }
