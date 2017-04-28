import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor(prop) {
        super(prop);
       this.incrementAsync = this.incrementAsync.bind(this);
       this.incremmentIfOdd = this.incremmentIfOdd.bind(this);
        console.log(this.incrementAsync.bind);
    }

    incremmentIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }
    
    render() {
        const { value, onIncrement, onDecrement } = this.props;
      return (
        <p>
            Clicked: {value} times
            {' '}
            <button onClick={onIncrement}>+</button>
            {' '}
            <button onClick={onDecrement}>-</button>
            {' '}
            <button onClick={this.incremmentIfOdd}>Increment if odd</button>
            {' '}
            <button onClick={this.incrementAsync}>Increment async</button>
        </p>)
    }
};


function Content(props) {
    return <p>Content组件的 props.value:{props.value}</p>
}

Content.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

// const propTypes = {
//     value : React.PropTypes.number.isRequired
// };