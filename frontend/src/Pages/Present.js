import React, { Component } from 'react';
import Sidebar from '../Sidebar'

class Present extends Component {
render() {
    return (
        <div className="container present">
            <Sidebar />
            <p>Present</p>
        </div>
        );
    }   
}

export default Present;