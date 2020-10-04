import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '../../pages/Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Signup from '../../pages/Signup/Signup';
import ArticleList from '../ArticleList/ArticleList';
import Article from '../Article/Article';
function App (props) {
  return (
    <BrowserRouter> 
      <div className="App">
        <Switch> 
          <Route path="/Login" component = {Login} />
          <Route path="/Signup" component = {Signup} />
          <Route path="/Home" render = {() => <Dashboard> <ArticleList /> </Dashboard>} />
          <Route path="/Article/:id" render = {() => <Dashboard> <Article /> </Dashboard>} />
          <Redirect to="/Login" />
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
