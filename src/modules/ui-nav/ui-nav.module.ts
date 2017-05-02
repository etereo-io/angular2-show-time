// The menu of the application. It controlls the main navigation of the user through the application

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthModule } from '@etereo/auth';
import { DomUtilsModule } from '@etereo/dom-utils';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'modules/shared';

import { UINavComponent } from './ui-nav.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    UINavComponent
  ],

  providers: [],

  // Modules
  imports: [
    CommonModule,
    SharedModule,
    DomUtilsModule,
    NgbModule,
    NgbDropdownModule,
    RouterModule,
    AuthModule
  ],

  exports: [
    UINavComponent
  ]
})

export class UINavModule {

}