import React from "react";



class TodoList extends React.Component {
    state = {
      newTodo: ""
    };

    render() {
        console.log(this.props);
        return (
          <>
            <div>
              {this.props.todos.map(todo => (
                <h4>
                   {todo.text}
                  {todo.completed}
                </h4>
              ))}
            </div>
            <input type="text"/>
            <button>Add new Item</button>
          </>
        );
      }
    }

    export default TodoList;
    