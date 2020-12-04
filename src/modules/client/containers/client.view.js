import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom';

export class ClientView extends Component {
    render() {
        return (
            <div>
                <h1>Client View</h1>
                <Link to="/client/add">New</Link>
                
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Birth date</th>
                            <th>E-mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Filbert Furby</td>
                            <td>1912-05-05 10:35:55</td>
                            <td>ffurby0@ibm.com</td>
                            <td>
                                <Link to="/client/view/1">View</Link>
                                <Link to="/client/edit/1">Edit</Link>
                                <Link to="#">Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
