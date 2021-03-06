import { Component, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// APP-COMPONENT
export class AppComponent {
  private viewContainerRef: ViewContainerRef;

  // @ViewChild('window') window: ElementRef;

  // windowMinimized: boolean = false;

  public title: String = 'Angular-app';

  public constructor(viewContainerRef: ViewContainerRef, translate: TranslateService) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(process.env.LANG);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(process.env.LANG);
  }

  // toggleMinimizeWindow () {
  //   let has = $(this.window.nativeElement).hasClass('minimized');

  //   this.windowMinimized = !has;

  //   $(this.window.nativeElement).toggleClass('minimized');
  // }
}
