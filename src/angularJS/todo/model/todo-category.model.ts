import { Todo } from './todo.model';

export interface TodoCategory {
  name: string;
  todos: Todo[];
}
