import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom';

export class HomeIndex extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/client">Client</Link>
            </div>
        )
    }
}
