import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { User } from 'modules/shared';
import { AuthService } from '@etereo/auth';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss', '../sign-shared.component.scss' ]
})

export class SignUpComponent {
  user: User = {};

  constructor (private auth: AuthService, private router: Router, private toastr: ToastsManager) {}

  register (e) {
    e.preventDefault();

    if (!this.user.password || !this.user.userName) {
      console.log('not completed');
    }

    this
    .auth
    .register(this.user)
    .switchMap(() => {
      console.log('¡Enhorabuena! Se ha registrado correctamente');
      return this.auth.login(this.user);
    })
    .subscribe(() => {
      this.router.navigateByUrl('/home');
    },
    (payload) => {
      this.user = null;
      if (payload.type === 'USER_ALREADY_EXIST') {
        console.log('Ya hay un usuario registrado con este email');
      }
    });
  }
}
