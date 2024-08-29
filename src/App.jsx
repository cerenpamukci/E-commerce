import React from 'react';
import HomePage from "./components/HomePageDesktop"; 
import './App.css';
import Footer from './components/Footer';
import Shop from "./components/Shop"
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;