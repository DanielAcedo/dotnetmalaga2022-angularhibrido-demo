import template from './add-todo-button.component.html';

export enum AddButtonState {
  None,
  Adding,
  AddingEmpty,
}

class AddTodoButtonComponentController {
  public addButtonStateEnum = AddButtonState;
  public state: AddButtonState = AddButtonState.None;
  private onClick: () => void;

  click() {
    this.onClick?.();
  }

  getButtonClasses() {
    switch (this.state) {
      case AddButtonState.None:
        return 'btn-primary';
      case AddButtonState.Adding:
        return 'btn-success';
      case AddButtonState.AddingEmpty:
        return 'btn-danger';
    }
  }

  getIconClasses() {
    switch (this.state) {
      case AddButtonState.None:
        return 'bi-plus';
      case AddButtonState.Adding:
        return 'bi-check';
      case AddButtonState.AddingEmpty:
        return 'bi-x';
    }
  }
}

const addTodoButtonComponent: ng.IComponentOptions = {
  template,
  controller: AddTodoButtonComponentController,
  bindings: {
    state: '<',
    onClick: '&',
  },
};
export default addTodoButtonComponent;
