import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Button(props, context) {
    return (
        <button style={{ background: context.color }}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired
};

Button.contextTypes = {
    color: PropTypes.string.isRequired
};

function Message(props) {
    return (
        <li>
            {props.text} <Button>Delete</Button>
        </li>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired
};

class MessageList2 extends Component {
    getChildContext() {
        return { color: 'blue'};
    }

    render() {
        const messages = [
            {text: 'Hello React'},
            {text: 'Hello Redux'}
        ];
        const children = messages.map(
            (message, key) =>
            <Message key={key} text={message.text}/>
        );
        return (
            <div>
                <p>通过context将color跨级传递给里面的Button组件</p>
                <ul>
                    {children}
                </ul>
            </div>
        );
    }
}

MessageList2.childContextTypes = {
    color: PropTypes.string.isRequired
};

export default MessageList2;