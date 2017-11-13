import React, { Component } from 'react';
import Sidebar from '../Sidebar'

class Home extends Component {
render() {
    return (
        <div className="container home">
            <Sidebar/>
            <p>Home</p>
        </div>
        );
    }   
}

export default Home;