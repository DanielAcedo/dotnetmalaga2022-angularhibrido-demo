import { Todo } from '../../model/todo.model';
import template from './todo-line.component.html';
import './todo-line.component.scss';

class TodoLineController {
  public todo: Todo;
}

const todoLineComponent: ng.IComponentOptions = {
  template,
  controller: TodoLineController,
  bindings: {
    todo: '<',
  },
};
export default todoLineComponent;
