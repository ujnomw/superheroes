import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import SelectedHeroesBar from './containers/SelectedHeroesBar/SelectedHeroesBar'
import HeroesMaintain from './containers/HeroesMaintain/HeroesMaintain'
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SelectedHeroesBar/>
          <HeroesMaintain/>
        </Layout>
      </div>
    );
  }
}

export default App;
