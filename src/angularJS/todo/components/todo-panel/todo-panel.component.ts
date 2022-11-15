import { EventConstants } from '../../../../core/constants/events';
import { TodoCategory } from '../../model/todo-category.model';
import { Todo } from '../../model/todo.model';
import TodoService from '../../services/todo.service';
import { AddButtonState } from '../add-todo-button/add-todo-button.component';
import template from './todo-panel.component.html';
import './todo-panel.component.scss';

class TodoPanelController implements ng.IComponentController {
  public todoCategory: TodoCategory;
  public filteredTodos: Todo[] = [];
  public isAdding = false;

  public addButtonStateEnum = AddButtonState;
  public addButtonState: AddButtonState = AddButtonState.None;
  public editingName = '';

  private showDoneTodo: boolean = true;

  static $inject = ['todoService', '$scope'];
  constructor(private todoService: TodoService, private $scope: ng.IScope) {}

  $onInit(): void {
    this.filterTodos();

    this.todoService.subscribeToShowDoneTodoValue((showDoneTodo) => {
      this.showDoneTodo = showDoneTodo;
      this.filterTodos();
    });
  }

  filterTodos() {
    this.filteredTodos = this.todoCategory.todos.filter(
      (t) => this.showDoneTodo || !t.isDone
    );
  }

  deleteTodo(todo: Todo) {
    const foundIndex = this.todoCategory.todos.findIndex(
      (o) => o.id === todo.id
    );

    if (foundIndex !== -1) this.todoCategory.todos.splice(foundIndex, 1);

    this.filterTodos();
  }

  toggleAdd() {
    switch (this.addButtonState) {
      case AddButtonState.None:
        this.addButtonState = AddButtonState.AddingEmpty;
        break;
      case AddButtonState.Adding:
        this.todoService.addTodoToCategory(this.todoCategory, this.editingName);
        this.filterTodos();
        this.editingName = '';
        this.addButtonState = AddButtonState.None;
        break;
      case AddButtonState.AddingEmpty:
        this.addButtonState = AddButtonState.None;
        break;
    }

    this.$scope.$emit(EventConstants.AddButtonChanged, this.addButtonState);
  }

  toggleDone(todo: Todo) {
    this.filterTodos();
  }

  onNameChanged(name: string) {
    this.editingName = name;

    if (this.editingName === '') {
      this.addButtonState = AddButtonState.AddingEmpty;
    } else {
      this.addButtonState = AddButtonState.Adding;
    }
  }
}

const todoPanelComponent: ng.IComponentOptions = {
  template,
  controller: TodoPanelController,
  bindings: {
    todoCategory: '<',
  },
};
export default todoPanelComponent;
