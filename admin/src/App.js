import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './helper'
import { Provider } from 'react-redux'
import Login from './Component/NavBar Form/Login';
import Sidebardata, { Psidebardata } from './Component/SideNav/Sidebardata';
import PrivateRoute from './Component/NavBar Form/PrivateRoute';
import SignUp from './Component/NavBar Form/SignUp'
import Forgot from './Component/NavBar Form/Forgot';
import Plogin from './Component/NavBar Form/Plogin'
import Pforgot from './Component/NavBar Form/Pforgot'
import Main from './Component/NavBar Form/Main'
import Navbar from './Component/SideNav/Navbar';
import Design from './Component/Page/Design';
 
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
              {/* <Design></Design> */}
          <Switch>
            <Route path='/' component={Main} exact={true}></Route> 
            {/* <Practice></Practice> */}
            <Route path='/login' component={Login}></Route>
             <Route path='/signup' component={SignUp}></Route>
            <Route path='/forgot' component={Forgot}></Route>
            <Route path='/plogin' component={Plogin}></Route>
            <Route path='/pforgot' component={Pforgot}></Route>  
              {
              [...Sidebardata,...Psidebardata].map((theRouter,index)=><PrivateRoute 
                                                path={theRouter.path}
                                                exact={theRouter.exact}
                                                key={index} >
                                                <Navbar></Navbar>
                                                  <div>
                                                  <theRouter.main></theRouter.main>                                                
                                                  </div>
                                                </PrivateRoute>  
            )}
          
         </Switch>
        </Router>    
      </Provider>
    </>
  );
}

export default App;

