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
import WelcomeComponent from './welcome/welcome';

export const register = () => {
  const appModule = angular.module('myApp', []);

  appModule.component('welcome', WelcomeComponent);
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

  return appModule;
};
