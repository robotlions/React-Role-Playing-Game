import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom';
import {useState} from 'react';
import '../App.css';

class Login extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          inSession: !!Cookies.get('sessionid'),
          username: "",
          email: "",
          password: "",
          password1: "",
          password2: "",
          data: [],
          hasProfile: false,
          charData: null,
          accountData: [],
          hasAccount: false,
          usernamelog: "",
          passlog: "",
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.reset = this.reset.bind(this);
    this.playDemo = this.playDemo.bind(this);
      }


componentDidMount(){
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
    };
    if(this.state.isLoggedIn==true){
    fetch('/accounts/detail/', options)
    .then(response => {
      if(response.ok){
        this.setState({hasAccount: true})}
        return response.json()
    .then(response => this.setState({accountData: response, charData: response.character}))})

    if (this.state.charData){
      this.props.gameOn()
    }
}
  }

async playDemo(){
    let obj = {
      username: "demo",
      password: "safepass1",
    }
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);
    if(data.key) {
    Cookies.set('Authorization', `Token ${data.key}`);
    }
    this.props.setDemo();
    this.reset();

    

  }


reset(){
  this.setState({usernamelog: ""})
  this.setState({passlog: ""})
  this.setState({username: ""})
  this.setState({password: ""})
  window.location.reload();
}


  async handleLogin(e,){
    e.preventDefault();
    let obj = {
      username: this.state.usernamelog,
      password: this.state.passlog,
    }
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);
    if(data.key) {
    Cookies.set('Authorization', `Token ${data.key}`);
    }

    this.props.history.push("/main/");
    this.reset();

  }




handleInput(event){
          this.setState({[event.target.name]: event.target.value});
        }



async handleRegistration(e, obj){
  e.preventDefault();

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
      };
      const handleError = (err) => console.warn(err);
      const response = await fetch('/rest-auth/registration/', options);
      const data = await response.json().catch(handleError);

      if(data.key) {
        Cookies.set('Authorization', `Token ${data.key}`);
      }
      this.setState({username: "", email: "", password1: "", password2: ""})
      window.location.reload();
    }





handleLogout(){
      const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        fetch("/rest-auth/logout/", options)
          .then(response => response.json())
          .then(response => this.setState({data: response}));
          Cookies.remove('Authorization');
          Cookies.remove('sessionid');
          localStorage.clear()
          window.location.reload();
          this.props.gameOn();


    }



  render(){

const demoBtn = <button onClick={this.playDemo} className="demoButton">Play Demo!</button>

const charData = [this.props.all.charData]
const registerForm = <form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <input className="input-group form-control" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input className="input-group form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <p><button className="logButton" type="submit">Register</button></p>
      </form>


const profileCreate =
<form>
<p>Profile fields will go here.</p>
<div className="profileCreateForm"><button className="btn btn-secondary" onClick={this.createProfile}>Create Profile</button></div>
</form>

// const loginForm = <form onSubmit={(e) => this.handleLogin(e, this.state)}>
const loginForm = <div>
      <input className="input-group form-control" type="text" placeholder="username" name="usernamelog" value={this.state.usernamelog} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="password" name="passlog" value={this.state.passlog} onChange={this.handleInput}/>
      <button className="logButton" onClick={(e)=>this.handleLogin(e, this.state)} type="submit">Log In</button>
      </div>


const logOutForm = <form onSubmit={(e) => this.handleLogout(e, this.state)}>
<button className="logButton" type="submit">Log Out</button></form>

const accountChar = this.state.charData
const accountInfo = this.state.accountData
const accountName = this.state.hasAccount === true ? <p>Account: {accountInfo.username}</p> : null
const charInfo = this.state.hasAccount === true && this.state.charData !== null ?
<div>
<p>Available characters:</p>
<span>{accountChar.name} - Level {accountChar.level} {accountChar.job}</span><button className="saveButton" onClick={()=>this.deleteChar(accountChar)}>Delete Character</button></div> : <p>Create a character to enter a world of adventure.</p>


      return(
        <>
        <div className="demoBtn">
          {this.state.isLoggedIn === false ? demoBtn : null}</div>
        <div className="loginForm">
        {this.state.isLoggedIn === false && this.state.inSession === false ? loginForm : logOutForm}
        </div>
        </>
      );
    }
  }
  export default withRouter(Login)
