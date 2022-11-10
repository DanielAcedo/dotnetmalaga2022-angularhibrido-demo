import template from './checkbox.component.html';

class CheckboxComponentController {}

const CheckboxComponent: ng.IComponentOptions = {
  controller: CheckboxComponentController,
  template,
  bindings: {
    name: '@',
    label: '@?',
    value: '=',
  },
};
export default CheckboxComponent;
