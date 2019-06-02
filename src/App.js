import React, {Component} from 'react';
import Todos from './Todos';

class App extends Component {
  
  state = {
    todos : [
      {
        'id':0,
        'complete':true,
        'title':'Labore dolor eiusmod cillum quis.', 
        'content':'Irure pariatur minim tempor laborum magna non duis ex ea Lorem cupidatat irure velit. Est in ipsum excepteur laborum ut exercitation fugiat aliqua elit non dolor fugiat. Dolor eu laboris ex ullamco veniam nulla excepteur sit enim ad dolore consectetur tempor. Id et proident nisi amet laboris voluptate. Fugiat occaecat sunt cillum occaecat ut labore nulla aute excepteur incididunt qui labore mollit. Sit elit tempor ea eiusmod est reprehenderit et occaecat ex aliquip.'},
      {
        'id':1, 
        'complete':false,
        'title':'Sint tempor non eu sint aliquip nulla cupidatat duis sit voluptate cillum.', 
        'content': 'Ad sit laborum aute laborum occaecat incididunt voluptate eu labore sunt adipisicing sit est. Sunt labore elit reprehenderit cupidatat non in elit non. Ut ullamco occaecat pariatur cupidatat cillum sit nisi labore ex id deserunt.'},
      {
        'id':2,
        'complete':true,
        'title':'Est nisi minim ad sit ipsum aliquip.', 
        'content':'Eiusmod ex duis id veniam officia laborum pariatur et et dolor. Irure fugiat minim minim culpa cillum. Esse tempor consequat sunt excepteur officia consectetur sint excepteur.'}
    ]
  }

  buttonFunction = (id) => {
    console.log('Ive made it up here');
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
    }) });
  } 
  0000
  render () {
    return (
      <div className="section">
      <div className="container">
      <div className="content">
        <h1>Main App Component</h1>
        <p>Proident qui parismod. Tempor labore ocaboris consectetur cillum eu duis ad laborum dolore. Et elit dolor sit reprehenderit pariatur ut anim voluptate. Tempor pariatur ea consequat culpa voluptate veniam elit non quis id duis veniam eu est. Esse dolore sit et dolore sunt quis sint officia ullamco mollit sunt do velit mollit. Nulla mollit in reprehenderit anim culpa id ipsum commodo ea est adipisicing. Qui Lorem deserunt ullamco proident consequat adipisicing duis ullamco sit reprehenderit irure. Exercitation nulla ex et culpa sunt Lorem labore sunt officia reprehenderit pariatur. Amet dolor reprehenderit ullamco officia aute eecat et.</p>
        <h1>Rendering Todo Components</h1>
        <Todos todos={this.state.todos} buttonFunction={this.buttonFunction}/>
      </div>
    </div>
    </div>
    )
  }

}

export default App;
