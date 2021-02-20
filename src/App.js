import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';

import './App.css';

const ShopPage = (props) => {
  console.log(props);
  return (
    <h1>Shop Page</h1> 
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shoppage' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
