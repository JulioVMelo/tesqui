const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
 
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, completed: false}];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'ALTER_STATE':
      let stateById = state.filter(todo => todo.id === action.payload.id);
      Object.assign(...stateById, { completed: !action.payload.completed });
      return ([...state]);
    default:
      return state;
  }; 
};
