import React, { Component } from 'react'
import classes from './SelectedHeroesBar.css'
import SelectedList from '../../components/SelectedList/SelectedList'
import {connect} from 'react-redux'

class SelectedHeroesBar extends Component {
    getListOfHeroes = () => {
    let result = []
    this.props.heroes.forEach((name) => {
        result.push({
            name,
            image: this.props.images[name],
            count: this.props.counter[name]
        })
    })
    return result
}
    render() {
        return (
            <div className={classes.SelectedHeroesBar}>
                {   this.props.heroes.length
                    ? <SelectedList
                     heroesToDisplay = {this.getListOfHeroes()}
                    />
                    : <span>Выберите героя</span>
                }
            </div>
        )
    }


}
function mapStateToPros(state) {
    return {
        heroes: state.selected.ids,
        images: state.selected.images,
        counter: state.selected.counter
    }
}
export default connect(mapStateToPros, null)(SelectedHeroesBar);