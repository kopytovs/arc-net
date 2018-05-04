import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import news from './resources/news'

class News extends React.Component{
	render(){
		return(
			<div className="jumbotron news-item" style={{background: "#e3f2fd"}}>
				<div className="container">
					<Grid objects = {news} name = "news" status = "tree"></Grid>
				</div>
			</div>
            
		)
	}
}

export default News;