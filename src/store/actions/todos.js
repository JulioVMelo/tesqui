export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { 
    text,
    completed: false,
  }
});

export const alterState = (id, completed, text) => ({
  type: 'ALTER_STATE',
  payload: {
    id: id,
    completed,
    text,
  }
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: {id}
});
