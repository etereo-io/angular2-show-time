// Angular2 module

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '@etereo/auth';
import { SharedModule } from 'modules/shared';

import { LoginRouterModule } from './login-router.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    SignInComponent,
    SignUpComponent
  ],

  providers: [
  ],

  // Modules
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    LoginRouterModule
  ],

  exports: [
    SignInComponent,
    SignUpComponent
  ]
})

export class LoginModule {}