import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import articles from './resources/articles'

class Articles extends React.Component{
	render(){
		return(
			<div className="news articles">
				<h1> Статьи </h1>
				<div className="news-list">
					{articles.articles && articles.articles.map((newItem)=>(
                        <Link className='new-item' key={newItem.id} to={'articles/' + newItem.id}>
							<div className='new-item-image' style={{backgroundImage: `url(${newItem.img})`}}> </div>
							<div className='new-item-content'>
								<div className='new-item-title'> {newItem.title} </div>
								<div className='new-item-decription' dangerouslySetInnerHTML={{ __html: newItem.text }} />
								<div className='new-item-date'> {newItem.date} </div>
							</div>
                        </Link>
					))}					
				</div>
			</div>
		)
	}
}

export default Articles;