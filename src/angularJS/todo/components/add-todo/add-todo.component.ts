import template from './add-todo.component.html';

class AddTodoComponentController {
  public name = '';
  private onNameChanged: (payload: { name: string }) => void;

  public nameChanged() {
    this.onNameChanged?.({ name: this.name });
  }
}

const addTodoComponent: ng.IComponentOptions = {
  template,
  controller: AddTodoComponentController,
  bindings: {
    name: '=',
    onNameChanged: '&',
  },
};
export default addTodoComponent;
