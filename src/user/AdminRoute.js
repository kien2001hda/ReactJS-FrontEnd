import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../api/auth';
import SideBar from '../components/admin/Sidebarmenu'

const AdminRoute = ({ children }) => {
    return (
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
                <Route
                    render={() =>
                        isAuthenticated() && isAuthenticated().user.role === 1 ? (
                            children
                        ) : (
                            <Redirect
                                to={{ pathname: "/signin" }}
                            />
                        )
                    }
                />
            </div>
        </div>
    )
}

export default AdminRoute