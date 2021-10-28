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

    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <p> </p>
                    <p> Ingrese Credenciales</p>
                    <p> </p>
                    <h>Usuario:</h>
                    <div className="form-group col-md-6">
                        <input ref={this.saveUser} type="text" 
                        className="form-control form-control-lg" 
                        placeholder="usuario" 
                        //value="cristian.gulisano.dev@gmail.com"   // test
                        />
                    </div>
                    <h>Password:</h>
                    <div className="form-group col-md-2">
                        <input ref={this.savePass} type="text" 
                        className="form-control
                        form-control-lg" placeholder="* * * * * *"
                        //value="123456"  // test
                        />
                    </div>
                    <p></p>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="login" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;