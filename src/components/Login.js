import React, { Component } from 'react';
import Axios from 'axios'
import  Cookies  from 'js-cookie';
class Login extends Component {
    constructor(props){
        super()

        this.changeEmail=this.changeEmail.bind(this)
        this.changePassWord=this.changePassWord.bind(this)
        this.submit=this.submit.bind(this)
        this.state={
            email:'',
            motdepasse:'',
            auth:false
        }
    }
    

    Login(){
        const user = {
            email: this.state.email,
            motdepasse:this.state.motdepasse
          };
      
          Axios.post(`http://127.0.0.1:3100/login`,user)
            .then(res => {
              console.log(res);
              console.log(res.data);
              //console.log('res.data.email: '+res.data[0].email+'\n res.data.motdepasse: '+res.data[0].motdepasse)
              console.log('user.email: '+user.email+'\n user.motdepasse: '+user.motdepasse)
              if(res.data.length!=0){
                if(res.data[0].email===user.email && res.data[0].motdepasse===user.motdepasse){
                                
                                //var Auth=true;
                                // console.log(Auth)
                                Cookies.set('user',true,)
                                Cookies.set('nom',res.data[0].nom)
                                this.props.history.push('/') 
                            }
              }
              
              else{
                  alert("email ou mot de passe incorrect !")
              }
            })
    }

    changeEmail(e){
        this.setState({email:e.target.value})
    }
    changePassWord(e){
        this.setState({motdepasse:e.target.value})
    }
    submit(e){
        e.preventDefault();
        this.Login()
    }
    
    
    render() {
        return (
            <div>
                <div className="row m-5 p-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="float-left">Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.changeEmail}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left">Mot de passe</label>
                            <input type="password" className="form-control" name="motdepasse" onChange={this.changePassWord}></input>
                        </div>
                        <div className="form-group">
                           
                            <input type="submit" className="btn btn-info float-left" value="Se connecter" onClick={this.submit}></input>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}
/* export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100)
    },
  }; */

export var Auth;
export default Login;