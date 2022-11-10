export const setFocusDirective: ng.IDirectiveFactory = () => {
  return {
    restrict: 'A',
    scope: {
      focusTrigger: '@setFocus',
    },
    link: (scope: ng.IScope, el: JQuery) => {
      scope.$watch(
        () => scope.focusTrigger,
        () => {
          if (scope.focusTrigger) el[0].focus();
        }
      );
    },
  };
};
