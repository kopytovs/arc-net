import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

class Card extends React.Component{
	render(){
        const hasText = this.props.hasText
		const {object} = this.props
		if (hasText == "yes"){
            return (
                <div className="card">
                    <img className="card-img-top" src={object.image}/>
                    <div className="card-body">
                        <h5 className="card-title">{object.title}</h5>
						<p className="card-text">{object.text}</p>
                    </div>
                </div>
            )
		} else {
            return (
                <div className="card">
                    <img className="card-img-top" src={object.image}/>
                    <div className="card-body">
                        <h5 className="card-title">{object.title}</h5>
                    </div>
                </div>
            )
        }
	}
}

class Grid extends React.Component{
	render(){
		const {objects, name} = this.props
		const status = this.props.status
		if (status == "tree"){
            return(
                <div className="row">
                    {objects.map((objectElem, index)=>(
                        <Link to={`${name}/${objectElem.id}`} key={index+Date.now()} style={{paddingTop: "15pt"}} className='grid-el col-sm-4 col-4' key={`${name}${index}`}>
                            <Card object = {objectElem}/>
                        </Link>
                    ))}
                </div>
            )
		} else {
			return(
				<div className="row">
                    {objects.map((objectElem, index)=>(
                        <a href={objectElem.url} key={index+Date.now()} className='grid-el col-sm-4 col-4' style={{paddingTop: "15pt"}}>
                            <Card hasText="yes" object = {objectElem}/>
                        </a>
                    ))}
				</div>
			)
		}
	}
}

export default Grid;