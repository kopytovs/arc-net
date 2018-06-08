import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import news from './resources/news'

class NewsItem extends React.Component{
	render(){
		const { newsId } = this.props.match.params,
			currentNews = news.articles.filter(item => item.id === newsId)[0];
		return(
			<div className="new-item-page">

				<p className="new-item-page-date">{(new Date(currentNews.date)).toDateString()}</p>
				<h1 className="display-4 mx-auto">{currentNews.title}</h1>
				<hr className="my-4"/>	
				<div className='new-item-page-content'>
					<div className='new-item-page-content-image' style={{backgroundImage: `url(${currentNews.img})`}}> </div>
					<p className='new-item-page-content-text' dangerouslySetInnerHTML={{ __html: currentNews.text }} />
				</div>
			</div>
		)
	}
}

export default NewsItem;