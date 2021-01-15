import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';

function Routes() {
    return (
        <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/cart" component={Cart}/>
        </Switch>
    )
};

export default Routes;