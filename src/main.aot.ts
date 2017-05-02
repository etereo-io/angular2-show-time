import './polyfills';

import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../../aot/src/web-app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);