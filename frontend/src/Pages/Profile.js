import React, { Component } from 'react';
import Sidebar from '../Sidebar'

class Profile extends Component {
render() {
    return (
        <div className="container profile">
            <Sidebar />
            <p>Profile</p>
        </div>
        );
    }   
}

export default Profile;