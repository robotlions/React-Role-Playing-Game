import React, {Component} from 'react'
import Cookies from 'js-cookie'
import '../App.css';

class Login extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get('Authorization'),
          username: "",
          email: "",
          password: "",
          password1: "",
          password2: "",
          data: [],
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.reset = this.reset.bind(this);
      }

reset(){
  this.setState({username: ""})
  this.setState({password: ""})
  window.location.reload();
}


  async handleLogin(e, obj){
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
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);
    if(data.key) {
    Cookies.set('Authorization', `Token ${data.key}`);
    }
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
    }



async createProfile(){


    let formData = new FormData();
    formData.append('user', 1);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    }

    await fetch('/profiles/', options);
    }







  render(){


const registerForm = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <p>Welcome! Please register to create a profile and submit recipes</p>
      <input className="input-group form-control" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input className="input-group form-control" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input className="input-group form-control" type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <p><button className="btn btn-secondary" type="submit">Register</button></p>
      </form>)


const profileCreate = <div className="profileCreateForm"><button className="btn btn-secondary" onClick={this.createProfile}>Create Profile</button></div>


const loginForm = (<form onSubmit={(e) => this.handleLogin(e, this.state)}>
      <input className="input-group" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input className="input-group" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      <button className="btn" type="submit">Log In</button>
      </form>)

      return(
        <div className="loginForm">
        {loginForm}
        {registerForm}
        {profileCreate}
        </div>
      );
    }
  }
  export default Login
