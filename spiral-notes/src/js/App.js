import React from 'react';
import '../scss/App.scss';
import {DatePicker} from "./components/DatePicker";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Example} from "./components/example";

function App() {
  return (
   <HashRouter>
       <div className={"App"}>
       <Switch>
           <Route exact path='/' component={DatePicker}/>
           <Route path='/ex' component={Example}/>
       </Switch>
       </div>
   </HashRouter>
  );
}

export default App;
