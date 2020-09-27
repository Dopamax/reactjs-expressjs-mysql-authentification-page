import Cookies from 'js-cookie'
import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super()
        this.logout=this.logout.bind(this)
    }

    logout(e){
        e.preventDefault();
        Cookies.set('user',false)
       console.log( 'from home: '+Cookies.get('user'))
        this.props.history.push('/login')
    }
    render() {
        if(Cookies.get('user')==='false'){
           this.props.history.push('/login')
           return(<div>.</div>)
        }else{
        return (
            <div>
                <div className="row p-5 m-5">
                    <div className="col-md-11">
                    <h2>Bienvenu: {Cookies.get('nom')}</h2>   
                    </div>
                    <div className="col-md-1">
                        <input className="btn" type="button" value="Se déconnecter" onClick={e=>this.logout(e)} />
                    </div>
                </div>
                  
            </div>
        );
        }
    }
}

export default Home;