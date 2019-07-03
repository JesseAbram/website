import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Homepage from '../components/home/home'

 


function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/videos' component={() => (
        <div>hello</div>
      )}/>
    </Switch>
  )
}

export default AppRouter;
