import React, {Component} from 'react';
import Canvas from "./canvas.js";
import "./styles.css";

class Ticket extends Component {

    state = {
        logout: false
    }

    initilize = (e) => {
        e.preventDefault();

        this.props.x(this.init);

        this.setState({
            logout: true
        })
    }

    render() {
        return (
            <form onSubmit={this.initilize}>
                    
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
                            <div className="col-lg-6">
                                <div className="bs-component">
                                <div class="card border-dark mb-3" styles="max-width: 20rem;">
                                <div class="card-body">
                                    <h8 class="card-title">Pasajero</h8>
                                    <h6 class="card-text">{this.props.mensaje.name}</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bs-component">
                                <div class="card border-dark mb-3" styles="max-width: 20rem;">
                                <div class="card-body">
                                    <h8 class="card-title">Partida</h8>
                                    <h6 class="card-text">Buenos Aires, Puerto Madero</h6>
                                    <h8 class="card-title">Destino</h8>
                                    <h6 class="card-text">Forever</h6>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="bord">
                    <Canvas text={this.props.mensaje} />
                    </div>

                    <p></p>
                    <p></p>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Logout" />
                    </div>
                </form>
          );
    }
}
export default Ticket;