import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@etereo/auth';
import { HttpService } from '@etereo/http';
import { User } from 'modules/shared';

import * as _ from 'lodash';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    socket; 
    username: string;
    connected: boolean = false;

    constructor (private auth: AuthService, private http: HttpService) {
      this.auth.user$.subscribe((user: User) => {
        if (user) {
          this.connect();
        }
        else if (this.connected) {
          this.disconnect();
        }
      });
    }

    connect () {
      this.socket = io.connect('http://localhost:9000');
      this.connected = true;
      this.socket.on('connect', () => {
        console.log('on connect, userName: ', this.auth.getUser());
        this.socket.emit('log user', this.auth.getUser().userName);
      });
    }

    disconnect () {
      this.socket.disconnect();
      this.connected = false;
    }

    setUsername (username: string) {
      this.username = username;
    }

    receiveMessages (): Observable<any> {
      return Observable.fromEventPattern(
      (addBind) => {
        this.socket.on('new message', addBind);
      },
      (removeBind) => {

      })
      .filter((data: any) => {
        return data.to === this.username ? data.message : undefined;
      }); 
    }

    sendMessage (message: string) {
      this.socket.emit('new message', {
        from: this.username,
        message: message || 'message message message!!'
      })
    }

    getUsers (): Observable<Array<any>> {// TODO: remove
      return this.http.get('users');
    }
}