import React from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRoutes({children,...rest}) {
    let auth={}
    if(sessionStorage.plogin){
        auth=JSON.parse(sessionStorage.plogin)
    }
    //  console.log(children)
    return (      
        <Route
        {...rest}
        render={({location})=>
            auth.email?(
                children
            ):(
                <Redirect
                    to={{
                        pathname:"/main",
                        state:{from:location}
                    }}
                />
            )
        }
        />
    );
}

export default PrivateRoutes
