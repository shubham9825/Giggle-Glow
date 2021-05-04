import React, { useState } from "react";
import Pagination from "react-js-pagination";

function PageDemo() {
  const [isPasswordShown,setisPasswordShown]=useState(false)
   
  const togglePasswordVisiblity = () => {
   setisPasswordShown(  !isPasswordShown);
   }
    return (
        <div>
           {console.log(isPasswordShown)}
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

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    placeholder="Password"
                    type={isPasswordShown ? "text" : "password"}
                    name="pass"
                  />
                  <i
                    className="fa fa-eye password-icon"
                    onClick={togglePasswordVisiblity}
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
      //   </div>
    )
}

export default PageDemo
