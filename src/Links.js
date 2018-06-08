import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Grid from './Grid'
import links from './resources/links'
import {BrowserRouter, Route, Link} from "react-router-dom"

class Links extends React.Component{
    render(){
        return(
            <div className="news">
				<h1> Полезные ссылки </h1>
				<div className="links-list">
					{links.map((newItem)=>(
                        <Link className='link-item' key={newItem.id} to={newItem.id}>
							<div className='link-item-image' style={{backgroundImage: `url(${newItem.image})`}}> </div>
							<div className='link-item-content'>
								<div className='link-item-title'> {newItem.title} </div>
								<div className='link-item-decription' dangerouslySetInnerHTML={{ __html: newItem.text }} />
							</div>
                        </Link>
					))}					
				</div>
			</div>

        )
    }
}

export default Links;