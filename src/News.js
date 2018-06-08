import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import news from './resources/news'

class News extends React.Component{
	render(){
		return(
			<div className="news">
				<h1> Новости </h1>
				<div className="news-list">
					{news.articles && news.articles.map((newItem)=>(
                        <Link className='new-item' key={newItem.id} to={'news/' + newItem.id}>
							<div className='new-item-image' style={{backgroundImage: `url(${newItem.img})`}}> </div>
							<div className='new-item-content'>
								<div className='new-item-title'> {newItem.title} </div>
								<div className='new-item-decription' dangerouslySetInnerHTML={{ __html: newItem.text }} />
								<div className='new-item-tags'>
									{newItem.tags.map((tag)=>(
										<div className='new-item-tag'> {tag.name} </div>
									))}
								</div>
								<div className='new-item-date'> {newItem.date} </div>
							</div>
                        </Link>
					))}					
				</div>
			</div>
            
		)
	}
}

export default News;