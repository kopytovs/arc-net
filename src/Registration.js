import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

class Registration extends React.Component{
    render(){
        return(
            <div className="news lk">
                <h1> Регистрация </h1>
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
                    <div className="form-group col-md-auto">
                        <label htmlFor="exampleInputPassword1">Повторите пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                    </div>
                    <div className="row lk-row">
                        <div className='button'> Зарегестрироваться </div>
                        <div className='button-question'> Есть аккаунт? </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;