import { AddTodo } from "../actions/AddTodo";

const initialState = {
    title: "TodoList",
    todos: [{ 
        id: 1, 
        text: "Wal the Dog",
        completed: false },
        { id: 2, 
          text: "Choir Practice", 
          completed: false },
        { id: 3, 
          text: "Take kids shopping", 
          completed: false },
          
    ]}


    function reducer(state = initialState, action) {
        switch (action.type) {
          case AddTodo:
            return {
              ...state,
              todos: state.todos.concat({
                id: Date.now(),
                text: action.payload,
                completed: false
              })
            }}};

            export default reducer;