import React, {Component} from 'react';
import Canvas from "./canvas.js";
import "./styles.css";
import ReactToPrint from 'react-to-print';

class Ticket extends Component {

    state = {
        logout: false
    }

    goback = (e) => {
        e.preventDefault();

        const backout = "back"
        this.props.x(backout);

        this.setState({
            logout: false,
        })
    }

    logout = (e) => {
        e.preventDefault();

        const backout = "out"
        this.props.x(backout);

        this.setState({
            logout: true
        })
    }

    render() {
        return (
            <form onSubmit={this.logout}>
                    
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p class="mb-0">Gracias por confirmar!</p>
                            <p class="mb-0">A continuación podes descargar tu invitación</p>
                            <p class="mb-0">Te esperamos!!</p>
                            <p></p>
                        </blockquote>             
                    </figure>

                    <div class="card border-dark mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Love Airlines</div>
                        <div class="card-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                <div class="card border-dark mb-3" styles="max-width: 20rem;">
                                <div class="card-body">
                                    <h8 class="card-title">Pasajero</h8>
                                    <h6 class="card-text">{this.props.mensaje.name}</h6>
                                    <h8 class="card-title">Estado</h8>
                                    <h6 class="card-text">{this.props.mensaje.confirmed}-CONFIRMADO</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                <div class="card border-dark mb-3" styles="max-width: 20rem;">
                                <div class="card-body">
                                    <h8 class="card-title">Partida</h8><br></br>
                                    <a target="_blank" href={this.props.mensaje.addressLink}>{this.props.mensaje.address}</a><br></br>
                                    <br></br>
                                    <h8 class="card-title">Destino</h8>
                                    <h6 class="card-text">Hyderabad, India</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                <div class="card border-dark mb-3" styles="max-width: 20rem;">
                                <div class="card-body">
                                    <h8 class="card-title">Horario</h8>
                                    <h6>19:00</h6> 
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bord">
                    <Canvas text={this.props.mensaje} ref={(response) => (this.componentRef = response)} />
                    </div>
                    <p></p>
                    <ReactToPrint
                        content={() => this.componentRef}
                        trigger={() => <button className="btn btn-primary">Descargar Invitación</button>}
                    />
                    <p></p>
                    <p></p>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <input onClick={this.goback.bind(this)} className="btn btn-lg btn-danger btn-block" value="Volver" />
                        </div>
                        <div className="form-group col-md-1">
                            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Logout" />
                        </div>
                    </div>
                </form>
          );
    }
}
export default Ticket;