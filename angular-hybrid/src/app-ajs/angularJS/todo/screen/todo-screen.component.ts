import * as ng from 'angular';
import { TodoCategory } from '../model/todo-category.model';
import TodoRepositoryService from '../services/todo-repository.service';
import template from './todo-screen.component.html';
import './todo-screen.component.scss';

class TodoScreenController implements ng.IComponentController {
  public todoCategories: TodoCategory[];

  static $inject = ['todoRepositoryService'];
  constructor(private todoRepositoryService: TodoRepositoryService) {}

  $onInit() {
    this.todoCategories = this.todoRepositoryService.getTodoCategories();
  }
}

const todoScreenComponent: ng.IComponentOptions = {
  template,
  controller: TodoScreenController,
};
export default todoScreenComponent;
