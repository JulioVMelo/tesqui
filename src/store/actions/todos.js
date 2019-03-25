export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { 
    text,
    done: false,
  }
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: {id}
});
