import { TodoCategory } from '../../model/todo-category.model';
import template from './todo-panel.component.html';
import './todo-panel.component.scss';

class TodoPanelController {
  todoCategory: TodoCategory;
}

const todoPanelComponent: ng.IComponentOptions = {
  template,
  controller: TodoPanelController,
  bindings: {
    todoCategory: '<',
  },
};
export default todoPanelComponent;
