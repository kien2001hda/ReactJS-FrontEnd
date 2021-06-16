import React from 'react'
import { isAuthenticated } from '../../api/auth';
import { Link, Route } from 'react-router-dom'

const UserDashboard = () => {
    const { user: { _id, name, email, role } } = isAuthenticated()


    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {name}
                    </li>
                    <li className="list-group-item">
                        {email}
                    </li>
                    <li className="list-group-item">
                        {role === 1 ? 'Admin' : 'Register user'}
                    </li>
                </ul>
            </div>
        )
    }
    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purschase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name
                    </li>
                    <li className="list-group-item">
                        Email
                    </li>
                    <li className="list-group-item">
                        Role
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div>

            <div className="row">
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>
            </div>

        </div>
    )
}

export default UserDashboard