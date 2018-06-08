import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import articles from './resources/articles'

class Title extends React.Component{
	render(){
		const { articleId } = this.props.match.params,
			currentArticle = articles.articles.filter(article => article.id === articleId)[0];
		return(
			<div className="new-item-page">

				<p className="new-item-page-date">{(new Date(currentArticle.date)).toDateString()}</p>
				<h1 className="display-4 mx-auto">{currentArticle.title}</h1>
				<hr className="my-4"/>	
				<div className='article-item-page-content'>
					<div className='article-page-content-image' style={{backgroundImage: `url(${currentArticle.img})`}}> </div>
					<p className='article-page-content-text' dangerouslySetInnerHTML={{ __html: currentArticle.text }} />
				</div>
			</div>
		)
	}
}

export default Title;