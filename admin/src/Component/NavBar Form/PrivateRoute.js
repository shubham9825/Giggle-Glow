import React from 'react'
import { Redirect, Route, useHistory } from 'react-router'

function PrivateRoute({ children, ...rest }) {
    const history=useHistory()

    let auth = {}
    let user = sessionStorage.user
    if(!user){
        history.push('/')
    }else{
        if (user.admin) {
            auth = JSON.parse(sessionStorage.login)
        } else {
            auth = JSON.parse(sessionStorage.login)
        }
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
