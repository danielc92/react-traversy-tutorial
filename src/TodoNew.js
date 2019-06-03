import React, {Component} from 'react';


class TodoNew extends Component {

    state = {
        content: '',
        author: '',
    }

    submit = (e) => {
        e.preventDefault();
        this.props.todoData([this.state.author, this.state.content]);
        this.setState({author:'', content: ''})
    }

    change = (e) => this.setState({ [e.target.name]: e.target.value });

    render () {
        return (
            <div>
            <h3>Form Component</h3>
            <form className="form">
                <div className="field">
                    <label className="label">Author</label>
                    <input onChange={this.change} name="author" className="input"></input>
                        
                    <label className="label">Content</label>
                    <input onChange={this.change} name="content" className="input"></input>
                </div>
                <button className="button is-primary" onSubmit={this.submit}>Submit</button>
            </form>
            </div>
        )

    }
}


export default TodoNew;