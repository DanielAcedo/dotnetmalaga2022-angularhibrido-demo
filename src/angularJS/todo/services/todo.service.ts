import { max } from '../../../core/iterable-helper';
import { TodoCategory } from '../model/todo-category.model';
import { Todo } from '../model/todo.model';

export default class TodoService {
  public addTodoToCategory(
    todoCategory: TodoCategory,
    description: string,
    isDone: boolean = false
  ): Todo {
    const todo: Todo = {
      description,
      isDone: isDone,
      priority: max(todoCategory.todos, (t) => t.priority ?? 0) + 1,
    };

    todoCategory.todos.push(todo);

    return todo;
  }
}
