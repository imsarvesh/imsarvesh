export default (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: 1 + state.todos.length, name: action.todo.name }
        ]
      };
    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      throw new Error("Unknown action!", action);
  }
};
