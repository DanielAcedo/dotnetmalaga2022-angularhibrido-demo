import { Component } from '@angular/core';

@Component({
  selector: 'show-done-todo',
  templateUrl: './show-done-todo.component.html',
  styleUrls: ['./show-done-todo.component.scss'],
})
export class ShowDoneTodoComponent {
  public showDoneTodo: boolean = true;

  constructor() {}
}
