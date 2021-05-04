// import React, { useEffect, useState } from 'react'
// import { Button, ButtonGroup, Table } from 'react-bootstrap';
// import Pagination from "react-js-pagination";
// import { connect } from 'react-redux';
// import { GetContact } from '../../actions/Contact.action';

// function Practice(props) {
//     const [activePage, setCurrentPage] = useState(1)
//     const todosPerPage = 10

//     // Logic for displaying current todos
//     const indexOfLastTodo = activePage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = props.createContact.getData.slice(indexOfFirstTodo, indexOfLastTodo);

//     const handlePageChange = (pageNumber) => {
//         console.log(`active page is ${pageNumber}`);
//         setCurrentPage(pageNumber)
//     }

//     //get request 
//     useEffect(() => {
//         props.getContactdata()
//     }, [])

//     return (
//         <div className='container'>
//             <h1>Pagination</h1>
//             {props.createContact.getData.length > 0 &&
//                 <Table striped hover responsive className='table table-bordered'>
//                     <thead>
//                         <tr>
//                             <th>Address</th>
//                             <th>Phone No</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {console.log(props.createContact.getData)} */}
//                         {currentTodos.map(theData =>
//                             <tr key={theData._id}>
//                                 <td>{theData.address}</td>
//                                 <td>{theData.phone}</td>
//                                 <td>{theData.email}</td>
//                             </tr>
//                         )}
//                         <tr>
//                             <td colSpan={3} className="text-center">  
//                                  <Pagination 
//                                     activePage={activePage}
//                                     itemsCountPerPage={todosPerPage}
//                                     totalItemsCount={props.createContact.getData.length}
//                                     pageRangeDisplayed={3}
//                                     onChange={handlePageChange} />
//                              </td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             }

//         </div>
//     )
// }


// const mapStateToProps = (store) => {
//     return {
//         createContact: store.createContact
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getContactdata: () => dispatch(GetContact())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Practice)

import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Login extends Component {
  state = {
    isPasswordShown: false
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render = () => {
    const { isPasswordShown } = this.state;
    return (
       
      <div className="App">
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <form class="login100-form validate-form">
                <span class="login100-form-title p-b-26">
                  Welcome
                  <br />
                  <br />
                </span>

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    placeholder="Email"
                    type="text"
                    name="email"
                    autoComplete="off"
                  />
                </div>
                {console.log(isPasswordShown)}
                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    placeholder="Password"
                    type={isPasswordShown ? "text" : "password"}
                    name="pass"
                  />
                  <i
                    className="fa fa-eye password-icon"
                    onClick={this.togglePasswordVisiblity}
                  />
                </div>

                <div class="container-login100-form-btn">
                  <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn" />
                    <button class="login100-form-btn">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
