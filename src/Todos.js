import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

/*
In this component I want to render out a variable number of TodoItem Components
This is done by calling the map function on this.props.todos (passed down as a property from App.js)
Following that I can pass the values from relevant keys from each todo item into the props for TodoItem Component
I also set the PropTypes to accept an array only.
*/
class Todos extends Component {

    render (){
        return this.props.todos.map((todo) => 
            <TodoItem todo={todo} key={todo.id} changeTodoStatus={this.props.changeTodoStatus}/>
        );
    }
}

// Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;