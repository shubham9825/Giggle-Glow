// import React, { useEffect, useState } from 'react'
// import Lottie from "react-lottie";

// import * as location from '../loader/1055-world-locations.json'
// import * as success from '../loader/1127-success.json'

// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: location.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

// const defaultOptions2 = {
//   loop: true,
//   autoplay: true,
//   animationData: success.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };


// function Practice() { 
//   const [data, setData] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [completed, setcompleted] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setData(json);
//           setloading(true);

//           setTimeout(() => {
//             setcompleted(true);
//           }, 1000);
//         });
//     }, 2000);
//   }, []);

//   return (
//     <>
//         {!completed ?(<>
//           {!loading ? (
//             <Lottie options={defaultOptions1} height={200} width={200} />
//           ) : (
//             <Lottie options={defaultOptions2} height={100} width={100} />
//           )}
//         </>):(<h1>Your Data</h1>)}

//     </>
//   )
// }

// export default Practice

// import React, { useEffect, useState } from 'react'
// import '../loader/PreLoader.css' 

// function Practice() { 
//   const [data, setData] = useState([]);
//    const [completed, setcompleted] = useState(undefined);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setData(json);
           
//           setcompleted(true);
         
//         });
//     }, 3000);
//   }, []);
 
//   return (
//     <>
//       {!completed ? (
//           <>
//             <div className="spinnner">
//               <span>Otp Sending... </span>
//             </div>
//            </>
//       ) : (
//         <>
//           <h1>Your Data</h1>
//         </>
//       )}
//     </>
//   );
// }

// export default Practice
