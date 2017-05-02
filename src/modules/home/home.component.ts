import { Component } from '@angular/core';
import { AuthService } from '@etereo/auth';

import { AppConfigService } from 'modules/core';
import { ChatService } from 'modules/shared';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor (private auth: AuthService, private chatService: ChatService) {
    this.chatService.setUsername(this.auth.getUser().userName);
    this.chatService.receiveMessages()
    .subscribe((message: any) => {
      console.log('message received: ', message);  
    });
  }

  sendMessage () {
    this.chatService.sendMessage('mensajito');
  }

  getUsers () {
    this.chatService.getUsers()
    .subscribe((users: Array<any>) => {
      console.log('users: ', users);
    });
  }

  logout () {
    this.auth.logout()
    .subscribe(() => {
      console.log('logout success');
    });
  }
}
