import React from 'react';
import '../scss/App.scss';
import {PickDate} from "./components/PickDate";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {Example} from "./components/example";

function App() {
  return (
   <HashRouter>
       <div className={"App"}>
       <Switch>
           <Route exact path='/' component={PickDate}/>
           <Route path='/ex' component={Example}/>
       </Switch>
       </div>
   </HashRouter>
  );
}

export default App;
