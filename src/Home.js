import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

class Home extends React.Component{
	render(){
		return(
			<div className="jumbotron" style={{background: "#e3f2fd"}}>
  				<h1 className="display-3">Добро пожаловать на портал ARCNet</h1>
 				<p className="lead">
 					<h3 className="display-5">На нашем портале вы сможете:</h3>
 					<ul className="list-group">
 						<li className="list-group-item">Получить любую информацию об Арктике</li>
						<li className="list-group-item">Скачать нужные отчеты в любом удобном формате</li>
						<li className="list-group-item">Получить доступ к сотням статей и материалам различных ресурсов</li>
						<li className="list-group-item">Воспользоваться удобным поиском, для получения только самой необходимой информации</li>
						<li className="list-group-item">Получит данные на разных языках</li>
						<li className="list-group-item">Прочесть самые свежие новости об Арктическом регионе</li>
						<li className="list-group-item">И многое другое</li>
 					</ul>
 				</p>
			</div>
		)
	}
}

export default Home