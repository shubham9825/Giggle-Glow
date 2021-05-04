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
import Logout from './Component/NavBar Form/Logout';
import Plogout from './Component/NavBar Form/Plogout';
import Navbar from './Component/SideNav/Navbar';
import Design from './Component/Page/Design';
import Contact_us from './Component/Page/Contact_us'
import GetTeams from './Component/Page/GetTeams';
import Practice from './Component/NavBar Form/Practice'
import PageDemo from './Component/NavBar Form/PageDemo';
import Services from './Component/Page/Services';
import Gallarys from './Component/Page/Gallarys';
import Albums from './Component/Page/Albums';
import AboutUs from './Component/Page/AboutUs';

function App() {
  return (
    <>
      <Provider store={store}>
         <Router>
          <Switch>
            <Route path="/practice" component={Practice}></Route>
            <Route path='/pagedemo' component={PageDemo}></Route>
            <Route path='/' component={Design} exact={true} />
            <Route path='/main' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/logout' component={Logout} />
            <Route path='/forgot' component={Forgot} />
            <Route path='/contactus' component={Contact_us} />
            <Route path='/services' component={Services} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/plogin' component={Plogin} />
            <Route path='/plogout' component={Plogout} />
            <Route path='/pforgot' component={Pforgot} />
            <Route path='/gallarys' component={Gallarys} />
            <Route path='/albums' component={Albums} />
             <Route path='/getteams' component={GetTeams}></Route>
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

