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
import Registration from "./Registration"
import Kabinet from "./Kabinet"
import "./App.css"
import "./style.css"

import facebook from './resources/images/facebook-logo.svg';
import instagram from './resources/images/instagram.svg';
import twitter from './resources/images/twitter.svg';
import vk from './resources/images/vk.svg';

import logo from './resources/images/arctic.svg';
import search from './resources/images/search.svg';

import russia from './resources/images/russia.svg';
import usa from './resources/images/united-states.svg';

import { Input } from 'reactstrap';


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

            <header>
                <div className='header-wrap'>

                    <img src={logo} className='logo-img'/>
                    <div className='logo'>
                        <div className='logo-col'> ARCNet </div>
                        <div className='logo-col'> 
                            <div className='logo-row'> Arctic </div>
                            <div className='logo-row'> ScieNce </div>
                            <div className='logo-row'> EducaTion </div>
                        </div>
                    </div>

                    <div className='search'>
                        <img src={search} />
                        <Input type="text" name="text" placeholder='Поиск' />
                    </div>

                    <div className='flags'>
                        <img src={russia} />
                        <img src={usa} />
                    </div>
                </div>
            </header>   

            <div className='menu'>
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/news'>Новости</Link></li>
                    <li><Link to='/portal'>Портал</Link></li>
                    <li><Link to='/articles'>Статьи</Link></li>
                    <li><Link to='/links'>Полезные ссылки</Link></li>
                    <li><Link to='/lk'>Войти</Link></li>
                </ul>
            </div>

           




              <Route exact path="/" component={Home}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/news/:newsId" component={NewsItem}/>
              <Route exact path="/portal" component={Portal}/>
              <Route exact path="/articles" component={Articles}/>
              <Route exact path="/articles/:articleId" component={Title}/>
              <Route exact path="/links" component={Links}/>
              <Route exact path="/lk" component={Kabinet}/>
              <Route exact path="/registration" component={Registration}/>


              <footer>
                    <div className='footer-wrap'>
                        <ul className='footer-menu'>
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/news'>Новости</Link></li>
                            <li><Link to='/portal'>Портал</Link></li>
                            <li><Link to='/articles'>Статьи</Link></li>
                            <li><Link to='/links'>Полезные ссылки</Link></li>
                            <li><Link to='/lk'>Войти</Link></li>
                        </ul>

                        <ul className='footer-social'>
                            <li><Link to='#'><img src={facebook} /></Link></li>
                            <li><Link to='#'><img src={instagram} /></Link></li>
                            <li><Link to='#'><img src={twitter} /></Link></li>
                            <li><Link to='#'><img src={vk} /></Link></li>
                        </ul>
                    </div>

              </footer>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;