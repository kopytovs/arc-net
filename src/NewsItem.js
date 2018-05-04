import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import news from './resources/news'

class NewsItem extends React.Component{
	render(){
		const { newsId } = this.props.match.params,
			currentNews = news.filter(item => item.id === newsId)[0];
		return(
			<div className="jumbotron new-item">
				<img src={currentNews.image} className="rounded float-center"/>

				<p className="lead date">{(new Date(currentNews.date)).toDateString()}</p>
				<h1 className="display-4 mx-auto">{currentNews.title}</h1>
				<hr className="my-4"/>
				<p dangerouslySetInnerHTML={{ __html: currentNews.text }} />
			</div>
		)
	}
}

export default NewsItem;