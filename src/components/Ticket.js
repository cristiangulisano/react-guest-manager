import React, {Component} from 'react';
import Canvas from "./canvas.js";
import "./styles.css";

class Ticket extends Component {

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
                                    <h6 class="card-text">Pepe Argento</h6>
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
                    <Canvas text={this.props.mensaje.name} />
                </form>
          );
    }
}
export default Ticket;