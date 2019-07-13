import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

// const Header = () => <h2> Header</h2>
// const Dashboard = () => <h2> Dashboard</h2>
const SurveyNew = () => <h2> Survey New</h2>
// const Landing = () => <h2> Landing </h2>


class App extends Component {
  componentDidMount(){
    // hook up to redux store when started
    this.props.fetchUser();
  }

  render(){
    return (
        <div className="container">
          {/* Hi there! this div will be used for css styling */}

          <BrowserRouter>
                <div>
                    < Header />
                    <Route exact = {true} path="/" component ={Landing} /> 
                    <Route exact path="/surveys" component ={Dashboard} /> 
                    <Route path="/surveys/new" component ={SurveyNew} /> 

                    </div>
          </BrowserRouter>
        </div>
  )
  }
}

export default connect(null, actions)(App);
