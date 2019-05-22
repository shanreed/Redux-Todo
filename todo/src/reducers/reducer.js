import { AddTodo } from "../actions/AddTodo";

const initialState = {
    todos: [
      { text: "Wal the Dog",
        completed: false },
      { text: "Choir Practice", 
        completed: false },
      { text: "Take kids shopping", 
        completed: false },
          
    ]}


    function reducer(state = initialState, action) {
        switch(action.type) {
          default:
            return state
        }
        };

            export default reducer;






