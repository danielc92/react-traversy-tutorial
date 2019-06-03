import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render (){
        return (
            <div className="notification is-dark">
                <div className="content">
                    <h5 className="title">{this.props.todo.title}</h5>
                    <p className={this.props.todo.complete ? 'tag is-success' : 'tag is-light'}>Completed: {String(this.props.todo.complete)}</p>
                    <p>{this.props.todo.content}</p>
                
                    <p className="buttons">
                        <button onClick={this.props.changeTodoStatus.bind(this, this.props.todo.id)} className="button is-small is-outlined is-light">Toggle Status</button>
                        <button onClick={this.props.deleteTodo.bind(this, this.props.todo.id)} className="button is-small is-outlined is-danger">Delete this Todo</button>
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color:'light grey', backgroundColor: 'transparent'}}>Rendered on: {Date()}. Todo Id: {this.props.todo.id}</p>
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

