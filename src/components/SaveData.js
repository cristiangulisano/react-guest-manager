import React, {Component} from 'react';

class SaveData extends Component {

    state = {
        initialized: false
    }

    init = {
        docId: '',
        additional_info: '',
        category: '',
        confirmed_1: '',
        confirmed_2: '',
        drinks: false,
        email: '',
        main_guest_asoc: '',
        name: '',
        vegetarian: false
    }

    saveName = React.createRef();
    saveEmail = React.createRef();
    saveDocId = React.createRef();
    saveDrinks = React.createRef();
    saveVegetarian = React.createRef();
    saveAdditional_info = React.createRef();
    saveConfirmed_1 = React.createRef();

    initilize = (e) => {
        e.preventDefault();
        //this.init = val
        this.setState({
            initialized: true
        })
        //this.state.initialized = true
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

        if (this.saveConfirmed_1.current.value) {
            this.init.confirmed_1 = this.saveConfirmed_1.current.value;
        } else {
            this.init.confirmed_1 = this.props.mensaje.confirmed_1;
        };

        if (this.saveDrinks.current.value) {
            this.init.drinks = this.saveDrinks.current.value;
        } else {
            this.init.drinks = this.props.mensaje.drinks;
        };

        if (this.saveEmail.current.value) {
            this.init.email = this.saveEmail.current.value;
        } else {
            this.init.email = this.props.mensaje.email;
        };

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

        this.props.guestInfo(this.init);

        this.setState({
            initialized: false
        })

    }

    render() {
        //this.initilize(this.props.mensaje);
        if (this.state.initialized){
            console.log(this.props.mensaje)
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    
                    <p> </p>
                    <p> Por favor completar/validar los datos y confirmar asistencia</p>
                    <p> </p>
                    
                    <h>Nombre:</h>
                    <div className="form-group col-md-6">
                        <input ref={this.saveName} type="text" 
                        className="form-control form-control-lg" 
                        placeholder={this.props.mensaje.name} 
                        //value={this.props.mensaje.name}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.category}
                        value={this.props.mensaje.category}
                        />
                    </div>

                    <p></p>
                    <h>Email / Documento</h>
                    <div className="form-group col-md-6">
                        <input ref={this.saveEmail} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.email}
                        //value={this.props.mensaje.email}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input ref={this.saveDocId} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.docId}
                        //value={this.props.mensaje.docId}
                        />
                    </div>

                    <p></p>
                    <h>Consume Tragos / Menu Vegetariano</h>
                    <div className="form-group col-md-2">
                        <input ref={this.saveDrinks} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.drinks}  
                        //value={this.props.mensaje.drinks}  
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input ref={this.saveVegetarian} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.vegetarian} 
                        //value={this.props.mensaje.vegetarian}  
                        />
                    </div>

                    <p></p>
                    <h>Información Adicional:</h>
                    <div className="form-group col-md-8">
                        <input ref={this.saveAdditional_info} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.additional_info}  
                        //value={this.props.mensaje.additional_info}  
                        />
                    </div>

                    <p></p>
                    <h>Confirma Asistencia:</h>
                    <div className="form-group col-md-2">
                        <input ref={this.saveConfirmed_1} type="text" className="form-control
                        form-control-lg" placeholder={this.props.mensaje.confirmed_1}
                        //value={this.props.mensaje.confirmed_1}  
                        />
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
                            <p class="mb-0">Nos casamos! y queremos invitarte a que vengas a la ceremonia y a la fiesta</p>
                            <p class="mb-0">para acompañarnos en este evento tan importante para nosotros.</p>
                            <p></p>
                        </blockquote>     
                        
                                           
                    </figure>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <div class="card border-info mb-3" styles="max-width: 20rem;">
                                    <div class="card-header">Cuando?</div>
                                    <div class="card-body">
                                        <h4 class="card-title">Viernes 21 de Diciembre 2021</h4>
                                        <p class="card-text">Horario 19:00 - Puntual</p>
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
                                        <p class="card-text">Lola mora...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Que regalarnos? [sin compromiso]</div>
                        <div class="card-body">
                            <p class="card-text">Llevamos unos años viviendo juntos y ya tenemos todo, nos faltaría un autito...</p>
                            <p class="card-text">Dinero es el mejor regalo que nos pueden hacer y nos va a servir para la luna de miel!</p>
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