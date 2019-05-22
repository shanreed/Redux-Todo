import React from 'react';
import {connect} from 'react-redux'


class TodoList extends React.Component {
    state = {
      newTodo: ''
    };

    handleChange = e => {
      this.setState({
        newTodo: e.target.value
      })
    }

    
    render() {
        console.log(this.props);
        return (
          <>
            <div>
            <h1>TODO LIST</h1>
              {this.props.todos.map(todo => (
                <h3>
                   {todo.text}
                </h3>
              ))}
            </div>
            <input type="text" onChange = {this.handleChange} 
                   value = {this.state.newTodo} placeholder = 'Add New Todo Item'/>
            <button >Add new Item</button>
          </>
        );
      }
    }

    const mapStateToProps = state => {
      console.log(state)
      return {
        todos: state.todos
      };
    };

    export default connect(mapStateToProps)(TodoList);
    
    