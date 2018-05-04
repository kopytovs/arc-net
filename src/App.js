import React, {Component} from "react"
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import 'bootstrap/dist/css/bootstrap.css'
// import {Navbar, Nav, NavItem} from 'react-bootstrap'
import Home from './Home'
import Articles from "./Articles"
import Title from "./Title"
import News from "./News"
import NewsItem from "./NewsItem"
import Links from "./Links"
import Portal from "./Portal"
import Kabinet from "./Kabinet"
import "./App.css"

const history = createBrowserHistory();

// const Home = () => (
//   <div>
//     <h2>Главная</h2>
//   </div>
// )

// const News = () => (
//   <div>
//     <h2>Новости</h2>
//   </div>
// )


// const Articles = () => (
//   <div>
//     <h2>Статьи</h2>
//   </div>
// )

// const Links = () => (
//   <div>
//     <h2>Полезные ссылки</h2>
//   </div>
// )

// const Kabinet = () => (
//   <div>
//     <h2>Личный кабинет</h2>
//   </div>
// )



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openMenu: false
        };
    }
  render(){
    const { openMenu } = this.state;

    return(
      <BrowserRouter history={history}>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd"}}>

                <a className="navbar-brand" href="/">ARCNet</a>
                <button className="navbar-toggler" type="button" onClick={()=>{this.setState({openMenu: !this.state.openMenu})}}>
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className={openMenu ? "navbar-collapse" : "collapse navbar-collapse"} id="navbar-main">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link to="/" className="btn btn-outline-secondary" role="button" aria-pressed="true">Главная</Link></li>
                        <li className="nav-item"><Link to="/news" className="btn btn-outline-secondary" role="button" aria-pressed="true">Новости</Link></li>
                        <li className="nav-item"><Link to="/portal" className="btn btn-outline-secondary" role="button" aria-pressed="true">Портал</Link></li>
                        <li className="nav-item"><Link to="/articles" className="btn btn-outline-secondary" role="button" aria-pressed="true">Статьи</Link></li>
                        <li className="nav-item"><Link to="/links" className="btn btn-outline-secondary" role="button" aria-pressed="true">Полезные ссылки</Link></li>
                        <li className="nav-item"><Link to="/lk" className="btn btn-outline-secondary" role="button" aria-pressed="true">Личный кабинет</Link></li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input type="search" className="form-control mr-sm-2" placeholder="Что ищете?" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>


              <Route exact path="/" component={Home}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/news/:newsId" component={NewsItem}/>
              <Route exact path="/portal" component={Portal}/>
              <Route exact path="/articles" component={Articles}/>
              <Route exact path="/articles/:articleId" component={Title}/>
              <Route exact path="/links" component={Links}/>
              <Route exact path="/lk" component={Kabinet}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;