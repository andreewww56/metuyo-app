import React, { Component } from 'react';
import Sidebar from '../Sidebar'

class New extends Component {
render() {
    return (
        <div className="container new">
            <Sidebar/>
            <p>New Learning</p>
        </div>
        );
    }   
}

export default New;