import React from 'react';
import {Route,Switch} from 'react-router-dom';

import {routes} from './routingList';
const Routing = ()=>{

    const routeComponents = routes.map(({path,component},index)=>{
        return <Route exact path={path} key={index} component={component}/>        
    })

    return <Switch>
        {routeComponents}
    </Switch>

}

export default Routing;