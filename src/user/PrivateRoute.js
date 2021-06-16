import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../api/auth';

const PrivateRoute = ({ children }) => {
    return (
        <Route
            render={() =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/signin" }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute