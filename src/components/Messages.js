import { Component, Fragment } from 'react';

class Message extends Component {
    render() {
        return (
            <div id="message-list">
                {this.props.messages.map((message) => {
                    return (
                        <Fragment>
                            <div className="received-message">{message}</div>
                            <div className="clearfix"></div>
                        </Fragment>
                    )
                })}
            </div>
        )
    }
}

export default Message;