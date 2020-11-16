import {} from 'dotenv/config';
import { Component } from 'react';
import Textarea from './Textarea';
import Messages from './Messages';
import io from 'socket.io-client';

let socket;

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            messages: ['example message 1', 'example message 2']
        }
    }

    render() {
        return (
            <div id="chat">
                <Messages messages={this.state.messages} />
                <Textarea />
            </div>
        );
    }

   componentDidMount() {
        // Create the socket    
        const port = this.props.match.params.port;
        socket = io(process.env.REACT_APP_SERVER_DOMAIN + port, {transports: ['websocket', 'polling', 'flashsocket']});
        
        // Function that will print new message when received from the socket
        socket.on('chat message', (message) => {
            this.setState({
                messages: [...this.state.messages, message]
            })
        });
    }
}

export { Chat, socket };
