import React, { Component } from 'react';
import me from '../../img/me.jpg';



class Homepage extends Component {
    state = {  }
   
    render() { 
        return ( 
            <div >
             <img src={me} alt="Red dot" /></div>
         );
    }
}

export default Homepage;