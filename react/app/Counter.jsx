import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = { value: 999};
    }
    
    render() {
      return (
        <div>
            <button onClick={() => this.setState({value: this.state.value +1})}>
                INCREMENT
            </button>
            Counter 组件的内部状态：
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            <br/>
            <Content value={this.state.value} />
            <br/>
            <Content value={999} />
        </div>)
    }
};


function Content(props) {
    return <p>Content组件的 props.value:{props.value}</p>
}

Content.propTypes = {
    value: PropTypes.number.isRequired
};

// const propTypes = {
//     value : React.PropTypes.number.isRequired
// };