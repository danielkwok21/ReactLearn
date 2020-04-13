import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import configureStore, {history} from './redux/store'
import {Provider} from 'react-redux'

// pages import
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'

const store = configureStore()

// STEP 4: Connect router with app
ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            {/* Specify pages here */}
            <Route exact path='/one' render={()=><PageOne />} />
            <Route exact path='/two' render={()=><PageTwo />} />
            <Route exact path='/three' render={()=><PageThree />} />

            {/* Fall through pages */}
            <Route render={()=><div>No such page</div>} />
        </Switch>
    </ConnectedRouter>
</Provider>

, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
