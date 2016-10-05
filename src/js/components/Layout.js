import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux"

import {fetchProjects} from "../actions/projectActions"


import Footer from "./Footer";
import Header from "./Header";

@connect((store) => {
  return{
    projects: store.projects.projects,
  }
})

export default class Layout extends React.Component {
  constructor(){
    super();
    this._mouseEnter=this._mouseEnter.bind(this);
    this._mouseLeave=this._mouseLeave.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(fetchProjects())
  }

  _mouseEnter(e){
    let targetID = "hover-" + e.target.id
    document.getElementById(targetID).style.backgroundColor = "rgba(0,0,0,0.5)"
    document.getElementById(targetID).style.zIndex= "10"
    console.log("entering ", targetID);
  }

  _mouseLeave(e){
    let targetID = "hover-" + e.target.id
    document.getElementById(targetID).style.backgroundColor = "rgba(0,0,0,0)"
    document.getElementById(targetID).style.zIndex= "-10"
    console.log("leaving ", targetID);
  }

  render() {
    let cardSytle = {
      backgroundImage:'url(../../public/images/KindJobs.png)'
    }
    const mappedProjects = this.props.projects.map(project =>
                      <div key={project.id} className="col-md-4 cards-container">
                        <div className="cards col-md-11">
                          <div className="cards-trigger col-md-12" id={project.id} onMouseEnter={this._mouseEnter} onMouseLeave={this._mouseLeave}>
                          </div>
                          <img className="cards-image" src={project.image}/>
                          <div className="cards-name col-md-11">
                            <p> {project.text}</p>
                          </div>
                          <div className="cards-actions">
                            <a href={project.github} target="_blank">Github</a>
                            <p>|</p>
                            <a href={project.launch} target="_blank">Launch</a>
                          </div>
                        </div>
                        <div id={"hover-" + project.id} className="cards-hover col-md-11" >
                          <div className="cards-hover-text">{project.description}</div>
                        </div>
                      </div>)
    return (
      <div id="postProject">
        <div className="jumbotron ">
          <div>
            <img className="headshot" src="../public/images/headshot.jpg"/>
          </div>
          <div className="my-name">
            <h2 className="first-name">Rencheng</h2>
            <h2 className="last-name">Chua</h2>
          </div>
          <div className="underline">
          </div>
          <a className="btn-github" href="https://github.com/renchChua" target="_blank">
            <button className="btn-github-left"><i className="fa fa-github fa-2x" aria-hidden="true"></i></button>
            <button className="btn-github-right">GitHub</button>
          </a>
          <a className="btn-linkedin" href="https://www.linkedin.com/in/rencheng-chua-b4959a80" target="_blank">
            <button className="btn-linkedin-left"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></button>
            <button className="btn-linkedin-right">LinkedIn</button>
          </a>
          <a className="btn-email" href="mailto:rench.chua@gmail.com" target="_top">
            <button className="btn-email-left"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></button>
            <button className="btn-email-right">Email</button>
          </a>

        </div>
        <div className="section-headers">
          <h2>My Projects</h2>
        </div>
        <div className="projects-container">
          {mappedProjects}
        </div>

      </div>
    );
  }
}
