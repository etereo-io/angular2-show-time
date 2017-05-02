import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UnauthGuard } from '@etereo/auth';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: SignInComponent, canActivate: [ UnauthGuard ]},
      { path: 'register', component: SignUpComponent, canActivate: [ UnauthGuard ] }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouterModule {

}
