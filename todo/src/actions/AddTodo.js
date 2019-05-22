export const AddTodo = "AddTodo";

//actions creator
export const addNewTodo = todo => {
    // actions
    return {
      type: AddTodo,
      payload: todo
    };
  };



