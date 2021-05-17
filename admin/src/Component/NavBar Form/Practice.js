// import React, { Component } from 'react'

// export default class Practice extends Component {
//     constructor(props){
//       super(props)
//         this.state={count:1}
//     }

//     // HandleClick=()=>{
//     //   this.setState({count:this.state.count+1})
//     //   console.log(this.state.count)
//     // }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         {/* <button>Click</button> */}
//         {/* {console.log(this.state.count)} */}
//       </div>
//     )
//   }
// }
// import React, { Component } from 'react'

// export default class Practice extends Component {
//   constructor(props){
//     super(props)
//       this.state={count:1}
//       this.setState({count:2})
//   }

//   // shouldComponentUpdate(prevProps,prevState){
//   //   // console.warn(prevState)
//   //     if(prevState.count===this.state.count){
//   //       return false
//   //     } 
//   //     return true
//   // }
//   render() {
//     console.log('inside rander')
//     return (
//       <div>
//           {/* {console.warn(this.state.count)} */}
//            <h1>hello {this.state.count}</h1>
//            {/* <button onClick={()=>this.setState({count:this.state})}>onclick</button> */}
//       </div>
//     )
//   }
// }


// import React from 'react'

// function Practice() {
//   let a=6

//   const funone=()=>{
//     console.log(a)
//   }

//   return (
//     <div>
//         <p>{a}</p>
//         <Demo name={a}></Demo>
//         <button onClick={funone}>Click</button>
//     </div>
//   )
// }

// function Demo(props){
//   console.log('demo'+  props.name)
//   return(
//     <>
//     {/* {console.log('demo'+props.name)} */}
//     </>  
//   )
// }

// export default Practice


import React from 'react'

function Practice() {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.6534699062559!2d72.8548351580205!3d21.21967379647381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c202d98bf%3A0xb20a758d1f165e67!2sKshama%20Society%2C%20Satadhar%20Krupa%20Society%2C%20Sitaram%20Nagar%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1620923365151!5m2!1sen!2sin" width={300} height={300} style={{border: 0}} allowFullScreen loading="lazy" />

    </div>
  )
}

export default Practice
