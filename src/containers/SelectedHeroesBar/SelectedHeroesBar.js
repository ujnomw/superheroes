import React, { Component } from 'react'
import classes from './SelectedHeroesBar.css'
import SelectedList from '../../components/SelectedList/SelectedList'
import {connect} from 'react-redux'

class SelectedHeroesBar extends Component {
    render() {
        return (
            <div className={classes.SelectedHeroesBar}>
                <SelectedList
                    heroesToDisplay = {this.props.heroes}
                />
            </div>
        )
    }
}
function mapStateToPros(state) {
    return {
        heroes: state.selected.heroes
    }
}
export default connect(mapStateToPros)(SelectedHeroesBar);