import React, {Component} from 'react';
import Todos from './Todos';

class App extends Component {
  
  state = {
    todos : [
      {'id':0, 'title':'Labore dolor eiusmod cillum quis.', 'content':'Irure pariatur minim tempor laborum magna non duis ex ea Lorem cupidatat irure velit. Est in ipsum excepteur laborum ut exercitation fugiat aliqua elit non dolor fugiat. Dolor eu laboris ex ullamco veniam nulla excepteur sit enim ad dolore consectetur tempor. Id et proident nisi amet laboris voluptate. Fugiat occaecat sunt cillum occaecat ut labore nulla aute excepteur incididunt qui labore mollit. Sit elit tempor ea eiusmod est reprehenderit et occaecat ex aliquip.'},
      {'id':1, 'title':'Sint tempor non eu sint aliquip nulla cupidatat duis sit voluptate cillum.', 'content': 'Ad sit laborum aute laborum occaecat incididunt voluptate eu labore sunt adipisicing sit est. Sunt labore elit reprehenderit cupidatat non in elit non. Ut ullamco occaecat pariatur cupidatat cillum sit nisi labore ex id deserunt.'},
      {'id':2,'title':'Est nisi minim ad sit ipsum aliquip.', 'content':'Eiusmod ex duis id veniam officia laborum pariatur et et dolor. Irure fugiat minim minim culpa cillum. Esse tempor consequat sunt excepteur officia consectetur sint excepteur.'}
    ]
  }
  
  render () {
    console.log(this.state.todos);
    return (
      <div className="section">
      <div className="container">
      <div className="content">
        <h1>Introduction</h1>
        <p>Proident qui pariatur velit magna proident nisi quis eiusmod. Tempor labore occaecat occaecat deserunt laboris consectetur cillum eu duis ad laborum dolore. Et elit dolor sit reprehenderit pariatur ut anim voluptate. Tempor pariatur ea consequat culpa voluptate veniam elit non quis id duis veniam eu est. Esse dolore sit et dolore sunt quis sint officia ullamco mollit sunt do velit mollit. Nulla mollit in reprehenderit anim culpa id ipsum commodo ea est adipisicing. Qui Lorem deserunt ullamco proident consequat adipisicing duis ullamco sit reprehenderit irure. Exercitation nulla ex et culpa sunt Lorem labore sunt officia reprehenderit pariatur. Amet dolor reprehenderit ullamco officia aute esse reprehenderit nisi. Esse aliquip esse occaecat et.</p>

        <h1>Todos</h1>
        <Todos todos={this.state.todos}/>
      </div>
    </div>
    </div>
    )
  }

}

export default App;
