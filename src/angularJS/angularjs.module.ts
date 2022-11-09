import * as angular from 'angular';
import todoLineComponent from './todo/components/todo-line/todo-line.component';
import todoPanelComponent from './todo/components/todo-panel/todo-panel.component';
import CompletedTodoDirective from './todo/directives/completed-todo.directive';
import todoScreenComponent from './todo/screen/todo-screen.component';
import TodoRepositoryService from './todo/services/todo-repository.service';
import TodoService from './todo/services/todo.service';
import WelcomeComponent from './welcome/welcome';

export const register = () => {
  const appModule = angular.module('myApp', []);

  appModule.component('welcome', WelcomeComponent);
  appModule.component('todoScreen', todoScreenComponent);
  appModule.component('todoPanel', todoPanelComponent);
  appModule.component('todoLine', todoLineComponent);
  appModule.service('todoService', TodoService);
  appModule.directive('completedTodo', CompletedTodoDirective);
  appModule.service('todoRepositoryService', TodoRepositoryService);

  return appModule;
};
