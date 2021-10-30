import React, {Component} from 'react';
import SaveData from './components/SaveData';
import Login from './components/Login';
import Ticket from './components/Ticket';

class App extends Component {
  
  state = {
    isLoggedIn: false,
    isConfirmed: false
  }
  data = {
      docId: '',
      additional_info: '',
      category: '',
      confirmed_1: '',
      confirmed_2: '',
      drinks: '',
      email: '',
      main_guest_asoc: '',
      name: '',
      vegetarian: ''
  }
  user = {
    email: '',
    password: '',
    returnSecureToken: true
  }
  credentials = {
    userId: '',
    jwt: ''
  }

  async apiLogin(user, pass) {
    const key = 'AIzaSyCbaOoRdSXWHIvS7jyXQLIL2lxm8mOwzd0';
    //const user = this.user;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

    var res = await fetch(url , {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //email: user.email, 
        //password: user.password,
        email: user, 
        password: pass,
        returnSecureToken: true
      })
    })

    var sarasa = await res
    var body = await sarasa.json()

    this.credentials.jwt = body.idToken;
    this.credentials.userId = body.localId

    this.updateStat()
  }

  async apiRetrieve() {
    const url = `https://fir-guest-manager-default-rtdb.firebaseio.com/guests/${this.credentials.userId}.json?auth=${this.credentials.jwt}`;
    var res = await fetch(url)
    var body = await res.json()

    this.data.docId = body.docId;
    this.data.additional_info = body.additional_info
    this.data.category = body.category
    this.data.confirmed_1 = body.confirmed_1
    this.data.confirmed_2 = body.confirmed_2
    this.data.drinks = body.drinks
    this.data.email = body.email
    this.data.main_guest_asoc = body.main_guest_asoc
    this.data.name = body.name
    this.data.vegetarian = body.vegetarian
  
    console.log("body")
    console.log(body)
    console.log("data")
    console.log(this.data)
    
  }

  async apiUpdate(data) {
    const url = `https://fir-guest-manager-default-rtdb.firebaseio.com/guests/${this.credentials.userId}.json?auth=${this.credentials.jwt}`;

    var res = await fetch(url , {
      method: 'PUT',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        docId: data.docId,
        additional_info: data.additional_info,
        category: data.category,
        confirmed_1: data.confirmed_1,
        confirmed_2: data.confirmed_2,
        drinks: data.drinks,
        email: data.email,
        main_guest_asoc: data.main_guest_asoc,
        name: data.name,
        vegetarian: data.vegetarian
      })
    })
    var sarasa = await res
  }

  guestInfo = (init) => {
    this.data = init
    console.log(this.data)
    this.apiUpdate(this.data);
    this.setState({
      // forzar un logout...
      //isLoggedIn: false
      isConfirmed: true
    })
  }

  loginData = (val, user, pass) => {
    this.apiLogin(user, pass, this.updateStat);
  }
  updateStat(){
    if (this.credentials.jwt){
      this.apiRetrieve()
      this.setState({
        isLoggedIn: true
      })
    }
  }

  render(){
    if (this.state.isLoggedIn){
      if (!this.state.isConfirmed){
        return (
          <div className="app container">
            <div className="jumbotron">
              <p> </p>
              <p className="lead text-center">Bienvenidos al hall de invitados</p>
              <SaveData 
                guestInfo={this.guestInfo}
                mensaje={this.data}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="app container">
            <div className="jumbotron">
              <p> </p>
              <p className="lead text-center" >
                <h2></h2> 
              </p>
              <Ticket 
                mensaje={this.data}
              />
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="app container">
          <div className="jumbotron">
            <p> </p>
            <p className="lead text-center" >
              <h2>Bienvenido!</h2> 
            </p>
            <Login 
              loginData={this.loginData}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
