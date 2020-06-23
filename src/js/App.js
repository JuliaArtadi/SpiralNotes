import React from 'react';
import '../scss/App.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {Example} from "./components/example";
import {MainView} from "./MainView";

function App() {
  return (
   <HashRouter>
       <div className={"App"}>
       <Switch>
           <Route exact path='/' component={MainView}/>
           <Route path='/ex' component={Example}/>
       </Switch>
       </div>
   </HashRouter>
  );
}

export default App;
