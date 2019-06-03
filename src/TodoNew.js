import React, {Component} from 'react';


class TodoNew extends Component {


    state = {
        title: '',
        content: ''
    }


    submit = (e) => {
        e.preventDefault();
        this.props.todoData(this.state);
        this.setState({content:'', title: ''})
    }
    

    // Using e.target.name makes the key dynamic.
    change = (e) => this.setState({ 
        [e.target.name]: e.target.value });


    render () {
        return (
            <div>
            <h3>Form Component</h3>
            <form onSubmit={this.submit} className="form">
                <div className="field">
                    <label className="label">Title</label>
                    <input required onChange={this.change} name="title" className="input"></input>
                        
                    <label className="label">Content</label>
                    <input required onChange={this.change} name="content" className="input"></input>
                </div>
                <button className="button is-primary" type="submit">Submit</button>
            </form>
            </div>
        )

    }
}


export default TodoNew;