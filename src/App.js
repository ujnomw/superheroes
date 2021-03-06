import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import SelectedHeroesBar from './containers/SelectedHeroesBar/SelectedHeroesBar'
import HeroesMaintain from './containers/HeroesMaintain/HeroesMaintain'
import {Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SelectedHeroesBar/>
            <HeroesMaintain/>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/dc"/>
                )}/>
                <Route path="/dc"/>
                <Route path="/marvel"/>

            </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
