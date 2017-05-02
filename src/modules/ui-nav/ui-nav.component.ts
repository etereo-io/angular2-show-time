import { Component, ElementRef, Input, Output, EventEmitter, HostListener, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

import { AuthService } from '@etereo/auth'; // TODO:  Change to @etereo/angular-auth
import { User } from 'modules/shared';

@Component({
  selector: 'ui-nav',
  templateUrl: './ui-nav.component.html',
  styleUrls: ['./ui-nav.component.scss']
})

export class UINavComponent implements OnInit, AfterViewInit{
  @ViewChild('mainMenu') private mainMenuEl: ElementRef;
  @ViewChild('mainMenuResponsive') menuResponsive: ElementRef;

  @Input() userName: string = '';
  @Output() onNavigate = new EventEmitter();

  private currentPath: string = window.location.pathname;
  private responsiveMode: boolean;

  constructor (private authService: AuthService) {}

  clickLogout (e) {
    e.preventDefault();
    this.authService.logout();
  }

  ngOnInit () {
    this.authService.user$
    .subscribe((user: User) => {
      (!user || !user.id) ? this.userName = '' : this.userName = user.userName;
    });
  }

  ngAfterViewInit() {
    this.responsiveMode = !jQuery(this.menuResponsive.nativeElement).hasClass('hidden');
  }

  // Check if...
  onMobileMenuMutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.attributeName && mutation.attributeName === 'class') {
        this.responsiveMode = !jQuery(this.menuResponsive.nativeElement).hasClass('hidden');
      }
    });
  }

  toggleMobileMenu (e) {
    if (this.responsiveMode && e.srcElement && e.srcElement.getAttribute('data-collapse') !== 'false') {
      jQuery(this.mainMenuEl.nativeElement).toggleClass('hidden');
    }
  }

}
