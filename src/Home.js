import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

import languages from './resources/images/main-page/languages.svg';
import download from './resources/images/main-page/download.svg';
import database from './resources/images/main-page/database.svg';
import info from './resources/images/main-page/customer-service.svg';
import news from './resources/images/main-page/text-lines.svg';
import search from './resources/images/main-page/search.svg';

class Home extends React.Component{
	render(){
		return(
			<div>
				<div className='main-image'>
					<div className='main-image-title'> Добро пожаловать на наш портал! </div>
            	</div>

				<div className="home">
					<h3 className="home-title">На нашем портале вы сможете</h3>
					<ul className="list">
						<li className="list-item">
							<img src={info}/>
							<div> Получить любую информацию об Арктике </div>
						</li>
						<li className="list-item">
							<img src={download}/>
							<div> Скачать нужные отчеты в любом удобном формате </div>
						</li>
						<li className="list-item">
							<img src={database}/>
							<div> Получить доступ к сотням статей и материалам различных ресурсов </div>
						</li>
						<li className="list-item">
							<img src={search}/>
							<div> Воспользоваться удобным поиском</div>
						</li>
						<li className="list-item">
							<img src={languages}/>
							<div> Получит данные на разных языках </div>
						</li>
						<li className="list-item">
							<img src={news}/>
							<div> Прочесть самые свежие новости об Арктическом регионе </div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Home