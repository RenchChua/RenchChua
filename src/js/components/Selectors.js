import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux"

import {deleteTodo} from "../actions/todoActions"
import {fetchSelection, changeSelected } from "../actions/selectorActions"

@connect((store) =>{
  return{
    selection: store.selection.selection,
    fetchSelection: store.selection.fetchSelection,
    changeSelected: store.selection.changeSelected,

  }
})

export default class Selectors extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  changeSelected(e){
    const getDivs = document.getElementsByClassName('selector')
    for (var prop in getDivs) {
      if (typeof getDivs[prop] === "object") {
        getDivs[prop].className = "selector"
      }
    }
    const newSelection = e.target.innerHTML
    e.target.className= "selector selected"
    this.props.dispatch(changeSelected(newSelection))
  }

  render() {
    return(
      <div>
        <div className="selector" onClick={this.changeSelected.bind(this)}>All</div>
        <div className="selector" onClick={this.changeSelected.bind(this)}>Active</div>
        <div className="selector" onClick={this.changeSelected.bind(this)}>Done</div>
        <div className="selector" onClick={this.changeSelected.bind(this)}>Remove Done</div>
      </div>
    )
  }
}
