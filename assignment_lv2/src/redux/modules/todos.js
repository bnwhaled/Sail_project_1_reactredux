// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};

// 초기값 initialState
const initialState = {
  counter: 0,
  todos: [],
};

// 리듀서파트
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        todos: [...state.todos, { ...action.payload, id: state.counter }],
      };
    case DELETE_TODO:
      return {
        counter: state.counter,
        todos: [
          ...state.todos.filter((value) => {
            if (value.id !== action.payload.id) return value;
          }),
        ],
      };
    case DONE_TODO:
      console.log(action.payload);
      return {
        counter: state.counter,
        todos: [
          ...state.todos.map((value) => {
            if (value.id === action.payload.id) {
              return { ...value, isDone: !value.isDone };
            } else {
              return value;
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export default todos;
