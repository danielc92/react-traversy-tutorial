import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render (){
        return (
            <div className="notification is-dark">
                <div className="content">
                    <h3 class="title">{this.props.todo.title}</h3>
                    <p>{this.props.todo.content}</p>
                    <code>Rendered on: {Date()}. Todo Id: {this.props.todo.id}</code>
                </div>
            </div>
        )
    }

}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;

