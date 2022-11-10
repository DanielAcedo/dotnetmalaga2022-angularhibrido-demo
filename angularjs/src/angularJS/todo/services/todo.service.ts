import { max } from '../../../core/helpers/iterable-helper';
import { TodoCategory } from '../model/todo-category.model';
import { Todo } from '../model/todo.model';

export default class TodoService {
  private idCounter: number = 1;

  public addTodoToCategory(
    todoCategory: TodoCategory,
    description: string,
    isDone: boolean = false
  ): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      description,
      isDone: isDone,
      priority: max(todoCategory.todos, (t) => t.priority ?? 0) + 1,
    };

    todoCategory.todos.push(todo);

    return todo;
  }
}
