import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Practice() {
  
  const notify = () => toast.success("Wow so easy bgubub vyug yvh yv vyv   yv  !");
  return (
    <div>
       <button onClick={notify}>Notify!</button>
       <ToastContainer />
    </div>
  )
}

export default Practice
