import { Injectable } from '@angular/core';
import { TodoCategory } from '../../../../../angularJS/todo/model/todo-category.model';
import TodoService from '../../../../../angularJS/todo/services/todo.service';

@Injectable({ providedIn: 'root' })
export class UpgradedTodoRepositoryService {
  private todoCategories: TodoCategory[] = [];
  private init = false;

  constructor(private todoService: TodoService) {}

  public getTodoCategories(): TodoCategory[] {
    if (!this.init) {
      this.initCategories();
    }

    return this.todoCategories;
  }

  private initCategories(): void {
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

    this.init = true;
  }
}
