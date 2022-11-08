import * as angular from 'angular';
import { register as registerAngularJS } from './angularJS/angularjs.module';
import './index.scss';

const angularJSModule = registerAngularJS();

angular.bootstrap(document.body, [angularJSModule.name], { strictDi: true });
