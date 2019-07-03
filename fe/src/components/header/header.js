import React, { Component } from 'react'
import { BrowserRouter as Router, Link} from "react-router-dom";
import 'bulma/css/bulma.css';




export default class header extends Component {

    
  render() {
    return (
        <section className="section">
        <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/videos">Videos</Link></li>
                </ul>
            </nav>
        </div>
    </section>
      
    )
  }
}
