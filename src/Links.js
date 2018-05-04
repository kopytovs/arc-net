import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Grid from './Grid'
import links from './resources/links'

class Links extends React.Component{
    render(){
        return(
            <div className="jumbotron" style={{background: "#e3f2fd"}}>
                <div className="container">
                    <Grid objects = {links} name = "links"></Grid>
                </div>
            </div>

        )
    }
}

export default Links;