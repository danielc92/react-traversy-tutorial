import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
    render (){
        return (
            <div className="notification is-dark">
                <div className="content">
                    <h3 class="title">{this.props.todo.title}</h3>
                    <p>{this.props.todo.content}</p>
                    <p className={this.props.todo.complete ? 'tag is-success' : 'tag is-danger'}>Completed status: {this.props.todo.complete.toString() }</p>
                    <p style={{ fontFamily: 'monospace', color:'#45ed2f', backgroundColor: 'transparent'}}>Rendered on: {Date()}. Todo Id: {this.props.todo.id}</p>
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

