import { EventConstants } from '../../../../core/constants/events';
import { AddButtonState } from '../add-todo-button/add-todo-button.component';
import template from './add-todo.component.html';

class AddTodoComponentController {
  public name = '';
  private onNameChanged: (payload: { name: string }) => void;

  public haveFocus = false;

  static $inject = ['$scope'];
  constructor(private $scope: ng.IScope) {
    this.$scope.$on(
      EventConstants.AddButtonChanged,
      (_, buttonState: AddButtonState) => {
        this.haveFocus = buttonState === AddButtonState.Adding;
      }
    );
  }

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
