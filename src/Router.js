import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Chat } from './components/Chat';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/:port" component={Chat} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
