import * as ng from 'angular';

const CompletedTodoDirective: ng.IDirectiveFactory = () => {
  return {
    restrict: 'A',
    scope: {
      todo: '<',
    },
    link: (scope: ng.IScope, el: JQuery) => {
      scope.$watch(
        () => scope.todo.isDone,
        () =>
          el.css('textDecoration', scope.todo.isDone ? 'line-through' : 'solid')
      );
    },
  };
};
export default CompletedTodoDirective;
