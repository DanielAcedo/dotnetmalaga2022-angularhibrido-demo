import { Todo } from '../../model/todo.model';
import template from './todo-line.component.html';
import './todo-line.component.scss';

class TodoLineController {
  public todo: Todo;
  public onDelete: (payload: { todo: Todo }) => void;
  public onTodoDone: (payload: { todo: Todo }) => void;

  clickDelete() {
    this.onDelete?.({ todo: this.todo });
  }

  clickDone() {
    this.onTodoDone?.({ todo: this.todo });
  }
}

const todoLineComponent: ng.IComponentOptions = {
  template,
  controller: TodoLineController,
  bindings: {
    todo: '<',
    onDelete: '&?',
    onTodoDone: '&?',
  },
};
export default todoLineComponent;
