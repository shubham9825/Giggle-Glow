import { Alert, Button } from 'react-bootstrap';
import React, { useState } from 'react'
 

function Practice() {
  // router.post("/register", async (req, res) => {
  //   try {
  //     const { name, company_name, email, password } = req.body;
  
  //     //   Check Name Query.
  //     const validName = await pool.query(
  //       "SELECT * FROM logisticsuser WHERE user_name = $1",
  //       [name]
  //     );
  
  //     //   Check Email Query.
  //     const validEmail = await pool.query(
  //       "SELECT * FROM logisticsuser WHERE user_email = $1",
  //       [email]
  //     );
  
  //     //   Check Name & Email Already Exists.
  //     if (validName.rows.length != 0) {
  //       return res.json({ message: "Already Name exist" });
  //     } else if (validEmail.rows.length != 0) {
  //       return res.json({ message: "Already Email exist" });
  //     }
  
  //     //   OTP.
  //     var OTP = Math.floor(Math.random() * 1000) + 1111;
  //     const mailOptions = {
  //       from: "sumitbharodiya76@gmail.com",
  //       to: email,
  //       subject: "Your OTP",
  //       text: `Welcome ${name} Sir.
  //         Your Online NoteBook Otp is ${OTP}.
  
  //         This NoteBook is Completely Secure your Data.
  //         So you can store your personal information And data.
  //         Thank you For use my Online NoteBook.`,
  //     };
  //     const sendMail = await transporter.sendMail(mailOptions);
  
  //     // Bcrypt the Password.
  //     const saltRound = 10;
  //     const salt = await bcrypt.genSalt(saltRound);
  //     const bcryptPassword = bcrypt.hashSync(password, salt);
  
  //     const newUserData = await pool.query(
  //       "INSERT INTO logisticsuser (user_name, user_company_name, user_email, user_password, user_otp) VALUES ($1, $2, $3, $4, $5) RETURNING *",
  //       [name, company_name, email, bcryptPassword, OTP]
  //     );
  
  //     const token = jwtGenerator(newUserData.rows[0].user_id);
  //     res.json({ token: token, message: "Successfully Send Otp." });
  //   } catch (error) {
  //     console.log("register Error :", error.message);
  //     res.json({ message: "Register Server Error." });
  //   }
  // });
  import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Component/SideNav/Navbar'
import { store } from './helper'
import { Provider } from 'react-redux'
import Login from './Component/NavBar Form/Login';
import Sidebardata from './Component/SideNav/Sidebardata';
import PrivateRoute from './Component/NavBar Form/PrivateRoute';
import SignUp from './Component/NavBar Form/SignUp'
import Forgot from './Component/NavBar Form/Forgot'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          {/* <Navbar></Navbar> */}
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/forgot' component={Forgot}></Route>
            {/* <Practice></Practice> */}
            {Sidebardata.map((theRouter,index)=><PrivateRoute 
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

function Gallery(props) {
    
  const [data,setdata]=useState('')
  const [msg,setmsg]=useState('')
  const HandleSubmit=async(e)=>{
      e.preventDefault()  
      // props.gallerypost(data)  
      const formData = new FormData();    
      formData.append('file',data);
      
      try{
          const response=await axios.post('http://localhost:3001/upload',formData,{
              headers: {
                  'Content-Type': 'multipart/form-data'
                } 
          })
          console.log(response)
          console.log('success')
          setmsg('File Uploaded SuccessFully')
          setshow(true)
           
      }catch(error){
          if(error.response.status === 400){
              setmsg('no file uploded')
              setshow(true)
          }
          if(error.response.status === 500){
              setmsg('There was a problem with the server')
              setshow(true)
          }
      }
  }

  const handleChange=(e)=>{
      setdata(e.target.files[0])
  }

  const [show,setshow]=useState(false)

  return (
      <>
                      
       {show && <Alert className='pb-0' variant="danger" onClose={() => setshow(false)} dismissible>
           <p>{msg}</p>
      </Alert>}

          <Form className='container mt-5' onSubmit={HandleSubmit}>
              <fieldset>
                  <legend>Gallery</legend>
                  <Form.Group>
                      <Form.File name='UploadImg' onChange={handleChange} value={data.value} label="Enter Image"></Form.File>
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
              </fieldset>
          </Form>
      </>
  )
}

const mapStateToProps=(store)=>{
  return{
      creategallery:store.CreateGallery
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      gallerypost:(data)=>dispatch(CreateGallery(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery)

  }
  
export default Practice
