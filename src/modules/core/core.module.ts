import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@etereo/core';
import { AppConfigService } from './services/app-config.service';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    AppConfigService
  ],
  exports: [
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}