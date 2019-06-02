import React, {Component} from 'react';

class Todos extends Component {

    render (){
        return this.props.todos.map((item, index) => 
            <div className="notification">
                <h3>{item.title}</h3>
            </div>
        );
    }

}

export default Todos;