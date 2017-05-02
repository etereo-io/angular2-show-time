import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { User } from 'modules/shared';
import { AuthService } from '@etereo/auth';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss', '../sign-shared.component.scss' ]
})

export class SignInComponent {
  private user: User = new User();

  constructor (private auth: AuthService, private router: Router, private toastr: ToastsManager) {}

  login (e) {
    e.preventDefault();

    this
    .auth
    .login(this.user)
    .subscribe(() => {
      this.router.navigateByUrl('');
    },
    (payload) => {
      // if (payload.type === 'USER_NOT_EXIST') {
      console.log('Email o contraseña erroneo');
      // }
    });
  }
}
