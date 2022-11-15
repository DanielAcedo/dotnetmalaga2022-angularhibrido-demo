import { Component } from '@angular/core';
import TodoService from '../../../../../angularJS/todo/services/todo.service';

@Component({
  selector: 'show-done-todo',
  templateUrl: './show-done-todo.component.html',
  styleUrls: ['./show-done-todo.component.scss'],
})
export class ShowDoneTodoComponent {
  public showDoneTodo: boolean = true;

  constructor(private todoService: TodoService) {}

  changeToggle() {
    this.todoService.emitShowDoneTodoValue(this.showDoneTodo);
  }
}
