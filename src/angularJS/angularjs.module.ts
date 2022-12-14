import * as angular from 'angular';
import CheckboxComponent from '../core/components/checkbox/checkbox.component';
import addTodoButtonComponent from './todo/components/add-todo-button/add-todo-button.component';
import addTodoComponent from './todo/components/add-todo/add-todo.component';
import todoLineComponent from './todo/components/todo-line/todo-line.component';
import todoPanelComponent from './todo/components/todo-panel/todo-panel.component';
import CompletedTodoDirective from './todo/directives/completed-todo.directive';
import todoScreenComponent from './todo/screen/todo-screen.component';
import TodoRepositoryService from './todo/services/todo-repository.service';
import TodoService from './todo/services/todo.service';
import { setFocusDirective } from '../core/directives/set-focus.directive';

import {
  downgradeComponent,
  downgradeInjectable,
} from '@angular/upgrade/static';
import { CheckboxNewComponent } from '../core/components/checkbox-new/checkbox-new.component';
import { TodoRepositoryNewService } from '../angular/app/todo/services/todo-repository-new/todo-repository-new.service';
import { ShowDoneTodoComponent } from '../angular/app/todo/components/show-done-todo/show-done-todo.component';

export const register = () => {
  const appModule = angular.module('myApp', []);

  appModule.component('todoScreen', todoScreenComponent);
  appModule.component('todoPanel', todoPanelComponent);
  appModule.component('todoLine', todoLineComponent);
  appModule.component('addTodo', addTodoComponent);
  appModule.component('addTodoButton', addTodoButtonComponent);
  appModule.component('checkbox', CheckboxComponent);
  appModule.service('todoService', TodoService);
  appModule.service('todoRepositoryService', TodoRepositoryService);
  appModule.directive('completedTodo', CompletedTodoDirective);
  appModule.directive('setFocus', setFocusDirective);

  // downgraded components and services
  appModule.directive(
    'checkboxNew',
    downgradeComponent({ component: CheckboxNewComponent })
  );
  appModule.directive(
    'showDoneTodo',
    downgradeComponent({ component: ShowDoneTodoComponent })
  );
  appModule.service(
    'upgradedTodoRepositoryService',
    downgradeInjectable(TodoRepositoryNewService)
  );

  return appModule;
};
