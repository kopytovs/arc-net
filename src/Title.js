import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import articles from './resources/articles'

class Title extends React.Component{
	render(){
		const { articleId } = this.props.match.params,
			currentArticle = articles.filter(article => article.id === articleId)[0];
		return(
			<div className="jumbotron new-item">
                <img src={currentArticle.image} className="rounded float-center" style={{"max-width":"500pt"}}/>
                <p className="lead date">{(new Date(currentArticle.date)).toDateString()}</p>
				<h1 className="display-4 mx-auto">{currentArticle.title}</h1>
				<hr className="my-4"/>
				<p>{currentArticle.text}</p>
			</div>
		)
	}
}

export default Title;