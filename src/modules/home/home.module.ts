import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'modules/shared';
import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    HomeComponent
  ],

  providers: [],

  // Modules
  imports: [
    CommonModule,
    SharedModule,
    HomeRouterModule
  ],

  exports: [
    HomeComponent
  ]
})

export class HomeModule {

}
