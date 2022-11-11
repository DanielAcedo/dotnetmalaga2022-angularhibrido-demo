import * as ng from 'angular';
import { TodoRepositoryNewService } from '../../../angular/app/todo/services/todo-repository-new/todo-repository-new.service';
import { TodoCategory } from '../model/todo-category.model';
import template from './todo-screen.component.html';
import './todo-screen.component.scss';

class TodoScreenController implements ng.IComponentController {
  public todoCategories: TodoCategory[];

  static $inject = ['upgradedTodoRepositoryService'];
  constructor(private todoRepositoryService: TodoRepositoryNewService) {}

  $onInit() {
    this.todoCategories = this.todoRepositoryService.getTodoCategories();
  }
}

const todoScreenComponent: ng.IComponentOptions = {
  template,
  controller: TodoScreenController,
};
export default todoScreenComponent;
