import React, {Component} from 'react';
import Todos from './Todos';
import Header from './Header';

/*
  This is the main App Component
  Todo and Header Component are brought into this Component
  State is hard coded in for now
  Button arrow function is created in App Component so that it can be passed down to children Components
  In order to pass an argument to a function 'up the tree' you can call bind on the function that is passed 
  down to the child component or 'down the tree'. For example passing the ID for the object up the tree for the buttonFunction() to use
  setState method is called in order to modify the state of a Component, Component states should never be mutated directly!
*/

class App extends Component {
  
  state = {
    todos : [
      {
        'id':0,
        'complete':true,
        'title':'Labore dolor eiusmod cillum quis.', 
        'content':'Irure pariatur minim tempor laborum magna non duis ex ea Lorem cupidatat irure velit. Est in ipsum excepteur laborum ut exercitation fugiat aliqua elit non dolor fugiat. Dolor eu laboris ex ullamco veniam nulla excepteur sit enim ad dolore consectetur tempor. Id et proident nisi amet laboris voluptate. Fugiat occaecat sunt cillum occaecat ut labore nulla aute excepteur incididunt qui labore mollit. Sit elit tempor ea eiusmod est reprehenderit et occaecat ex aliquip.'
      },
      {
        'id':1, 
        'complete':false,
        'title':'Sint tempor non eu sint aliquip nulla cupidatat duis sit voluptate cillum.', 
        'content': 'Ad sit laborum aute laborum occaecat incididunt voluptate eu labore sunt adipisicing sit est. Sunt labore elit reprehenderit cupidatat non in elit non. Ut ullamco occaecat pariatur cupidatat cillum sit nisi labore ex id deserunt.'
      },
      {
        'id':2,
        'complete':true,
        'title':'Est nisi minim ad sit ipsum aliquip.', 
        'content':'Eiusmod ex duis id veniam officia laborum pariatur et et dolor. Irure fugiat minim minim culpa cillum. Esse tempor consequat sunt excepteur officia consectetur sint excepteur.'
      },
      {
        'id':3,
        'complete':true,
        'title':'Incididunt et sint officia tempor mollit sunt commodo. Ea ad in reprehenderit labore. Ad non sunt pariatur aute nulla.', 
        'content':'Eiusmod ex duis id veniam officia laborum pariatur et et dolor. Irure fugiat minim minim culpa cillum. Esse tempor consequat sunt excepteur officia consectetur sint excepteur.'
      }
    ]
  }

  
  changeTodoStatus = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
    }) });
  } 


  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(t => t.id !== id)]

    });
  }


  render () {
    return (
    <div className="section">
      <div className="container">
        

        <div className="content">
        <Header />
          <h3>Main App Component</h3>
          <p>Proident qui parismod. Tempor labore ocaboris consectetur cillum eu duis ad laborum dolore. Et elit dolor sit reprehenderit pariatur ut anim voluptate. Tempor pariatur ea consequat culpa voluptate veniam elit non quis id duis veniam eu est. Esse dolore sit et dolore sunt quis sint officia ullamco mollit sunt do velit mollit. Nulla mollit in reprehenderit anim culpa id ipsum commodo ea est adipisicing. Qui Lorem deserunt ullamco proident consequat adipisicing duis ullamco sit reprehenderit irure. Exercitation nulla ex et culpa sunt Lorem labore sunt officia reprehenderit pariatur. Amet dolor reprehenderit ullamco officia aute eecat et.</p>
          <h3>Rendering Todo Components</h3>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} changeTodoStatus={this.changeTodoStatus}/>
        </div>
      </div>
    </div>
    )
  }

}

export default App;
