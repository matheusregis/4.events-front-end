import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './services/history';
import Main from './pages/Main';

export default function Routes() {
    return (
        <Router history={history}>
            <Route path="/" component={Main} exact />
        </Router>
    );
}
