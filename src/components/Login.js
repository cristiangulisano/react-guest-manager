import React, {Component} from 'react';

class Login extends Component {

    saveUser = React.createRef();
    savePass = React.createRef();

    handleData = (e) => {
        e.preventDefault();
        const val = true;
        const user = this.saveUser.current.value;
        const pass = this.savePass.current.value;
        this.props.loginData(val, user, pass);
    }

    x = {
        msgLogin : "hola"
    }

    render() {
        if (this.props.msg === "Si") {
            this.x.msgLogin = " Usuario o Password incorrecto"
        }else {
            this.x.msgLogin = ""
        }
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <p> </p>
                    <p> Ingrese Credenciales</p>
                    <p> </p>
                    <h>Usuario:</h>
                    <div className="form-group col-md-4">
                        <input ref={this.saveUser} type="text" 
                        className="form-control form-control-lg" 
                        placeholder="usuario@mail.com" 
                        //value="cristian.gulisano.dev@gmail.com"   // test
                        />
                    </div>
                    <h>Password:</h>
                    <div className="form-group col-md-4">
                        <input ref={this.savePass} type="password" 
                        className="form-control
                        form-control-lg" placeholder="* * * * * *"
                        //value="123456"  // test
                        />
                        <span class="badge bg-warning">{this.x.msgLogin}</span>
                    </div>
                    <p></p>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-dark btn-block" value="login" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;