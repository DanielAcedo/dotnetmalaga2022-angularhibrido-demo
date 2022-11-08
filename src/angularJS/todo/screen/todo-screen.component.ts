import * as ng from 'angular';
import { TodoCategory } from '../model/todo-category.model';
import TodoService from '../services/todo.service';
import template from './todo-screen.component.html';
import './todo-screen.component.scss';

class TodoScreenController implements ng.IComponentController {
  public todoCategories: TodoCategory[];

  static $inject = ['todoService'];
  constructor(private todoService: TodoService) {}

  $onInit() {
    this.todoCategories = [
      { name: 'Peliculas', todos: [] },
      { name: 'Juegos', todos: [] },
      { name: 'Series', todos: [] },
    ];

    this.todoService.addTodoToCategory(
      this.todoCategories[0],
      'Blade Runner',
      true
    );
    this.todoService.addTodoToCategory(this.todoCategories[0], 'Space Jam 2');

    this.todoService.addTodoToCategory(this.todoCategories[1], 'Scorn');
    this.todoService.addTodoToCategory(
      this.todoCategories[1],
      'God of War: Ragnarok'
    );
    this.todoService.addTodoToCategory(this.todoCategories[1], 'Xenoblade 3');

    this.todoService.addTodoToCategory(this.todoCategories[2], 'Sandman');
    this.todoService.addTodoToCategory(
      this.todoCategories[2],
      'Lo Que Hacemos En Las Sombras'
    );
    this.todoService.addTodoToCategory(this.todoCategories[2], 'Seinfeld');
  }
}

const todoScreenComponent: ng.IComponentOptions = {
  template,
  controller: TodoScreenController,
};
export default todoScreenComponent;
