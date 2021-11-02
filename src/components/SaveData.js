import React, {Component} from 'react';

class SaveData extends Component {

    state = {
        initialized: false
    }

    init = {
        CBU: '',
        docId: '',
        additional_info: '',
        category: '',
        confirmed: '',
        drinks: '',
        email: '',
        main_guest_asoc: '',
        name: '',
        name_orig: '',
        address: '',
        vegetarian: ''
    }

    saveName = React.createRef();
    saveEmail = React.createRef();
    saveDocId = React.createRef();
    saveDrinks = React.createRef();
    saveVegetarian = React.createRef();
    saveAdditional_info = React.createRef();
    saveConfirmed = React.createRef();

    initilize = (e) => {
        e.preventDefault();
        
        this.setState({
            initialized: true
        })
    }

    handleData = (e) => {
        e.preventDefault();

        if (this.saveDocId.current.value){ 
            this.init.docId = this.saveDocId.current.value
        } else {
            this.init.docId = this.props.mensaje.docId
        };

        if (this.saveAdditional_info.current.value) {
            this.init.additional_info = this.saveAdditional_info.current.value;
        } else {
            this.init.additional_info = this.props.mensaje.additional_info;
        };

        if (this.saveConfirmed.current.value) {
            this.init.confirmed = this.saveConfirmed.current.value;
        } else {
            this.init.confirmed = this.props.mensaje.confirmed;
        };

        if (this.saveDrinks.current.value) {
            this.init.drinks = this.saveDrinks.current.value;
        } else {
            this.init.drinks = this.props.mensaje.drinks;
        };

        /*if (this.saveEmail.current.value) {
            this.init.email = this.saveEmail.current.value;
        } else {*/
            this.init.email = this.props.mensaje.email;
        //};

        if (this.saveName.current.value){ 
            this.init.name = this.saveName.current.value
        } else {
            this.init.name = this.props.mensaje.name
        };

        if (this.saveVegetarian.current.value) {
            this.init.vegetarian = this.saveVegetarian.current.value;
        } else {
            this.init.vegetarian = this.props.mensaje.vegetarian;
        }

        this.init.category = this.props.mensaje.category;
        this.init.main_guest_asoc = this.props.mensaje.main_guest_asoc;
        this.init.CBU = this.props.mensaje.CBU;
        this.init.name_orig = this.props.mensaje.name_orig;
        this.init.address = this.props.mensaje.address;

        this.props.guestInfo(this.init);

        this.setState({
            initialized: false
        })

    }

    render() {
        if (this.state.initialized){
            console.log(this.props.mensaje)
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    
                    <p> </p>
                    <p> Por favor completar/validar los datos y confirmar asistencia</p>
                    <p> </p>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <h>Nombre:</h>
                            <input ref={this.saveName} type="text" 
                            className="form-control form-control-lg" 
                            placeholder={this.props.mensaje.name} 
                            />
                        </div>
                    </div>

                    <p></p>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <h>Email</h>
                            <input ref={this.saveEmail} type="text" className="form-control
                            form-control-lg" value={this.props.mensaje.email}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <h>Documento</h>
                            <input ref={this.saveDocId} type="text" className="form-control
                            form-control-lg" placeholder={this.props.mensaje.docId}
                            />
                        </div>
                    </div>

                    <p></p>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <h>Consume Tragos</h>
                            <select class="form-select" id="exampleSelect1" ref={this.saveDrinks} defaultValue={this.props.mensaje.drinks}>
                             <option> </option>
                             <option>SI</option>
                             <option>NO</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <h>Menu Vegetariano</h>
                            <select class="form-select" id="exampleSelect1" ref={this.saveVegetarian} defaultValue={this.props.mensaje.vegetarian}>
                             <option> </option>
                             <option>SI</option>
                             <option>NO</option>
                            </select>
                        </div>
                    </div>

                    <p></p>
                    <h>Información Adicional:</h>
                    <div className="form-group col-md-8">
                        <input ref={this.saveAdditional_info} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.additional_info}   
                        />
                    </div>

                    <p></p>
                    <div className="form-group col-md-3">
                    <h>Confirma Asistencia:</h>
                            <select class="form-select" id="exampleSelect1" ref={this.saveConfirmed} defaultValue={this.props.mensaje.confirmed}>
                             <option> </option>
                             <option>SI</option>
                             <option>NO</option>
                            </select>
                    </div>
                    
                    <p></p>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Guardar" 
                        />
                    </div>
                </div>
            </form>
        );
        } else {
            console.log(this.props.mensaje)
            return (
                <form onSubmit={this.initilize}>
                    
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p class="mb-0">Hola! Somos Neh y Cris!</p>
                            <p class="mb-0">Nos casamos! y queremos invitarte a que vengas a la ceremonia y la fiesta</p>
                            <p class="mb-0">para acompañarnos en este evento tan importante para nosotros.</p>
                            <p></p>
                        </blockquote>             
                    </figure>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Historia</div>
                        <div class="card-body">
                            <p class="card-text">Nos conocimos.....</p>
                            <p class="card-text">  bla bla bla </p>
                            <p class="card-text">  imagen or not... </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <div class="card border-info mb-3" styles="max-width: 20rem;">
                                    <div class="card-header">Cuando?</div>
                                    <div class="card-body">
                                        <h4 class="card-title">Viernes 21 de Enero 2022</h4>
                                        <p class="card-text">Horario 19:00 - Recepción</p>
                                        <p class="card-text">Horario 20:00 - Ceremonia</p>
                                    </div>
                                </div>                                                                                                            
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <div class="card border-info mb-3" styles="max-width: 20rem;">
                                    <div class="card-header">Donde?</div>
                                    <div class="card-body">
                                        <h4 class="card-title">Puerto Madero, CABA</h4>
                                        <p class="card-text">{this.props.mensaje.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Que regalarnos?</div>
                        <div class="card-body">
                            <p class="card-text">Llevamos unos años viviendo juntos y ya tenemos todo!</p>
                            <p class="card-text">Dinero es el mejor regalo que nos pueden hacer y nos va a servir para la luna de miel!</p>
                            <h8>Podes hacer una transferencia:</h8>
                            <div>
                                <span class="badge bg-light">CBU: {this.props.mensaje.CBU}</span>
                            </div>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Dress Code / Codigo de Vestimenta</div>
                        <div class="card-body">
                             <h>Mujeres</h>
                            <div>
                                <span class="badge bg-light">Vestido</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Ropa Formal</span>
                            </div>
                            <h>Hombres</h>
                            <div>
                                <span class="badge bg-light">Elegante Sport</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Traje</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Ingresar" />
                    </div>
                </form>
            );
        }
    }
}

export default SaveData;