import React, { Component } from 'react'
import classes from './HeroesMaintain.css'
import SearchInput from '../../components/SearchInput/SearchInput'
import HeroesCatalogue from '../../components/HeroesCatalogue/HeroesCatalogue'
import Menu from '../../components/Menu/Menu'
import {connect} from 'react-redux'
import {onHeroClick, onSearchChange, onSwitchUniverse} from "../../store/actions/maintain";

class HeroesMaintain extends Component {
    render() {
        return (

            <div className={classes.HeroesMaintain}>
                <SearchInput
                    onChange = {this.props.onSearchChange}
                    resetSearch = {this.props.resetSearch}
                />
                <HeroesCatalogue
                    heroes= {this.props.activeHeroes}
                    onHeroClick={this.props.onHeroClick}
                />
                <Menu
                    onSwitch={this.props.onSwitchUniverse}
                    isDC = {this.props.isDC}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        activeHeroes : state.maintain.activeHeroes,
        isDC: state.maintain.isDC,
        resetSearch: state.maintain.resetSearch
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSearchChange: event => dispatch(onSearchChange(event)),
        onHeroClick: id => dispatch(onHeroClick(id)),
        onSwitchUniverse: () => dispatch(onSwitchUniverse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroesMaintain);