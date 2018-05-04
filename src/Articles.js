import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import articles from './resources/articles'

class Articles extends React.Component{
	render(){
		return(
			<div className="jumbotron" style={{background: "#e3f2fd"}}>
				<div className="container">
					<Grid objects = {articles} name = "articles" status = "tree"></Grid>
				</div>
			</div>
		)
	}
}

export default Articles;