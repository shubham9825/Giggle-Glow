import React from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
    let auth = {}
    let user = sessionStorage.user
    if (user.admin) {
        auth = JSON.parse(sessionStorage.login)
    } else {
        auth = JSON.parse(sessionStorage.login)
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }} />
                )
            }
        />
    );
}

export default PrivateRoute
