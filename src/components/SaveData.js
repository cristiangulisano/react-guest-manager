import React, {Component} from 'react';

class SaveData extends Component {

    state = {
        initialized: false
    }

    init = {
        CBU: '',
        alias: '',
        cuenta: '',
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
        addressLink: '',
        vegetarian: ''
    }

    saveName = React.createRef();
    saveEmail = React.createRef();
    //saveDocId = React.createRef();
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

        /*if (this.saveDocId.current.value){ 
            this.init.docId = this.saveDocId.current.value
        } else {*/
            this.init.docId = this.props.mensaje.docId
        //};

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
        this.init.alias = this.props.mensaje.alias;
        this.init.cuenta = this.props.mensaje.cuenta;
        this.init.name_orig = this.props.mensaje.name_orig;
        this.init.address = this.props.mensaje.address;
        this.init.addressLink = this.props.mensaje.addressLink;

        this.props.guestInfo(this.init);

        this.setState({
            initialized: false
        })

    }

    render() {
        if (this.state.initialized){
            //console.log(this.props.mensaje)
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    
                    <p> </p>
                    <p> Por favor completar/validar los datos y confirmar asistencia</p>
                    <p> </p>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <h>Nombre (modificalo como prefieras para tu invitaci??n):</h>
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
                        {/*<div className="form-group col-md-2">
                            <h>Documento</h>
                            <input ref={this.saveDocId} type="text" className="form-control
                            form-control-lg" placeholder={this.props.mensaje.docId}
                            />
                        </div>*/}
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
                    <h>Info Adicional (cel??aco, al??rgico, etc...)</h>
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
            //console.log(this.props.mensaje)
            return (
                <form onSubmit={this.initilize}>
                    
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p class="mb-0">Hola! Somos Neh y Cris!</p>
                            <p class="mb-0">Nos casamos! y queremos invitarte a que vengas a la ceremonia y la fiesta</p>
                            <p class="mb-0">para acompa??arnos en este evento tan importante para nosotros.</p>
                            <p></p>
                        </blockquote>             
                    </figure>

                    <div class="card border-warning mb-3" styles="max-width: 20rem;">
                        <div class="card-header">COVID19 - Medidas de Seguridad!!</div>
                        <div class="card-body">
                        <p class="card-text">
                            Dado el reciente incremento de casos estamos implementando las siguientes medidas para la seguridad de todos: <br></br>
                            <p></p>
                            <p></p>
                            - El sal??n tiene una capacidad de 120 personas, de la cual solo ocuparemos un 30%, dejando as?? un volumen de aire considerable.<br></br>
                            <p></p>
                            - Habr?? alcohol en gel en ba??os y mesas.<br></br>
                            <p></p>
                            - El uso del barbijo ser?? obligatorio.<br></br>
                            <p></p>
                            -La vacunaci??n no ser?? obligatoria pero estamos al tanto de que la mayor??a de nuestros invitados tienen las 2 o 3 dosis aplicadas y/o ya tuvieron el virus con lo cual la audiencia posee un buen nivel de inmunidad.<br></br>
                            <p></p>
                            - Se prever?? abrir las puertas de vidrio para circular el aire cada ciertos per??odos, y se contar?? con un espacio para fumadores.<br></br>
                            <p></p>
                            - La gran mayor??a de los invitados son j??venes, esto fue puramente coincidencia pero tambi??n termina ayudando a que haya menor poblaci??n de riesgo.<br></br>
                            Tampoco habr?? ni??os en el evento.<br></br>
                        </p>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Nuestra Historia</div>
                        <div class="card-body">
                        <p class="card-text">
                            Nos conocimos en el trabajo, en la oficina del Centro, Cris trabajaba en el cuarto piso y Neh en el primero. <br></br>
                            Est??bamos en equipos distintos, cuando la empresa se estaba mudando. A Neh la mudaban a las oficinas de Madero y a Cris a las de Parque Patricios.<br></br>
                            Un mes antes de la mudanza, debido a un problema con un banco Cris tuvo que quedarse hasta tarde, y cuando se iba decidi?? parar en el primer piso a cargar su botella de agua para el gym..<br></br>
                            Mientras tanto Neh fue a la cocina a buscar un caf??, y fue ah?? donde nos conocimos por primera vez!!<br></br>
                            Tuvimos una charla casual y nos despedimos... y no nos volver??amos a cruzar hasta dentro de un mes.<br></br>
                            Unos d??as despu??s hubo un simulacro de incendio, y cuando todos volv??amos adentro, Cris al ver a Neh intent?? generar charla pero ella estaba distra??da y no hubo suerte..<br></br>
                            Llegado fin de mes, en el ??ltimo d??a en la oficina para Cris, a la salida se cruzan, se saludan, y ??l le cuenta que es su ??ltimo d??a..<br></br>
                            Luego de una charla casual, le pregunta si quiere pasarle el Facebook (sisi... el Face!).. para seguir en contacto y ella acepta :)
                            <p></p>
                            As?? fue como unos d??as m??s tarde comenzamos a salir!<br></br>
                            Todo iba excelente durante los siguientes meses.. hasta que la consultora de Neh decide llevarla de vuelta a India.<br></br>
                            Por m??s negociaciones intentadas, Neh termina y??ndose de Argentina :'(<br></br>
                            Pasaron 3 meses hasta que finalmente Neh consigui?? un trabjo en Argentina y pudo volver para encontrarse con Cris!<br></br>
                            <p></p>
                            Ya pasaron casi 5 a??os, vivimos mil experiencias juntos, viajes, proyectos, de todo! y hoy somos felices de poder dar este paso tan importante!!<br></br>
                            <p></p>
                            Esta historia Continuar??...
                        </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <div class="card border-info mb-3" styles="max-width: 20rem;">
                                    <div class="card-header">Cu??ndo?</div>
                                    <div class="card-body">
                                        <h4 class="card-title">Viernes 21 de Enero 2022</h4>
                                        <p class="card-text">19:00 - Recepci??n</p>
                                        <p class="card-text">20:00 - Ceremonia</p>
                                        <p class="card-text">21:00 - Fiesta</p>
                                    </div>
                                </div>                                                                                                            
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <div class="card border-info mb-3" styles="max-width: 20rem;">
                                    <div class="card-header">D??nde?</div>
                                    <div class="card-body">
                                        <h4 class="card-title">Puerto Madero, CABA</h4>
                                        <a target="_blank" href={this.props.mensaje.addressLink}>{this.props.mensaje.address}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Qu?? regalarnos?</div>
                        <div class="card-body">
                            <p class="card-text">Lo m??s importante es que vengas a acompa??arnos y disfrutar este momento con nosotros!</p>
                            Llevamos unos a??os viviendo juntos y ya fuimos equipando bien nuesta casa<br></br>
                            por eso lo m??s ??til para nosotros ser??a cualquier ayudita $, que nos va a servir para la luna de miel!<br></br>
                            <br></br>
                            <h8>Pod??s hacer una transferencia a:</h8>
                            <div>
                                <span class="badge bg-light">CBU: {this.props.mensaje.CBU}</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">ALIAS: {this.props.mensaje.alias}</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">CUENTA: {this.props.mensaje.cuenta}</span>
                            </div>
                        </div>
                    </div>

                    <div class="card border-info mb-3" styles="max-width: 20rem;">
                        <div class="card-header">Dress Code / Vestimenta | Algunas Opciones:</div>
                        <div class="card-body">
                             <h>Mujeres</h>
                            <div>
                                <span class="badge bg-light">Vestido de fiesta largo o corto</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Conjunto pantal??n y blazer</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Ropa Semi Formal</span>
                            </div>
                            <h>Hombres</h>
                            <div>
                                <span class="badge bg-light">Pantal??n de vestir y zapatos</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Camisa (no necesariamente formal)</span>
                                <span class="badge bg-secondary"> </span>
                                <span class="badge bg-light">Saco y Corbata (opcionales)</span>
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