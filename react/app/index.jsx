import '../bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter'
import MessageList1 from './MessageList1'
import MessageList2 from './MessageList2'

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        //JSX here!sss
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users</h3>
            </section>
          </div>
        )
    }
};


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);

const counter = document.createElement('div');
document.body.appendChild(counter);
ReactDOM.render(<Counter />, counter);

const messageList1 = document.createElement('div');
document.body.appendChild(messageList1);
ReactDOM.render(<MessageList1 />, messageList1);

const messageList2 = document.createElement('div');
document.body.appendChild(messageList2);
ReactDOM.render(<MessageList2 />, messageList2);

