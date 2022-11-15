import 'bootstrap';
import './index.scss';

import { register as registerAngularJS } from './angularJS/angularjs.module';

import 'zone.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular/app/app.module';
import { environment } from './angular/environments/environment';

if (environment.production) {
  enableProdMode();
}

registerAngularJS();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
