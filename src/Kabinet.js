import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

class Kabinet extends React.Component{
    render(){
        return(
            <div className="jumbotron container col-4">
                    <form>
                        <div className="form-group col-md-auto">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Введите email"/>
                        </div>
                        <div className="form-group col-md-auto">
                            <label htmlFor="exampleInputPassword1">Пароль</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-primary col-md">Войти</button>
                            <div className="col-md"></div>
                            <button type="submit" className="btn btn-secondary col-md">Регистрация</button>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Kabinet;