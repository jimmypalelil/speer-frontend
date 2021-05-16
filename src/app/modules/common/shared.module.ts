import { NgModule } from '@angular/core';
import { TryButtonComponent } from './components/try-button/try-button.component';
import { PerksComponent } from './components/perks/perks.component';


@NgModule({
  declarations: [
    TryButtonComponent,
    PerksComponent
  ],
  exports: [
    TryButtonComponent
  ]
})
export class SharedModule { }
