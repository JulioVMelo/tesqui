const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
 
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, done: action.payload.done }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default: 
      return state;
  }; 

};
