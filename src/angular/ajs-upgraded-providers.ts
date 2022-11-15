import TodoService from '../angularJS/todo/services/todo.service';

const generateProvider = (injectName: string, service: Function) => {
  return {
    provide: service,
    useFactory: (i: any) => i.get(injectName),
    deps: ['$injector'],
  };
};

export const todoServiceProvider = generateProvider('todoService', TodoService);
