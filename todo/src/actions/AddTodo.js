export const AddTodo = "AddTodo";


export const addNewTodo = todo => {
    // acttion
    return {
      type: AddTodo,
      payload: todo
    };
  };