import React, { Component } from 'react';
import { socket } from './Chat';

class Textarea extends Component {
    textRef = React.createRef();

    render() {
        return (
            <form id="textarea" onSubmit={this.sendMessage}>
                <input ref={this.textRef} type="text" id="textarea-input" placeholder="Write your message here..."></input>
                <button id="send" tpye="submit">⌲</button>
            </form>
        );
    }

    sendMessage = (event) => {
        event.preventDefault();

        const text = this.textRef.current.value;
        if (text === '') {
            return false;
        }
        
        socket.emit('chat message', text);
        this.textRef.current.value = '';
    }
}

export default Textarea;
