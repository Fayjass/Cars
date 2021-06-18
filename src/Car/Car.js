import React from 'react'
import PropsType from 'prop-types'
// function Car(props) {
//   const divStyle = {
//     bordere: '1px solid #ccc',
//     marginBottom: '10px',
//     display: 'block',
//     padding: '10px',
//     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
//     borderRadius: '5px',
//   }
//   return (
//     <div style={divStyle}>
//       <h2>this is car component</h2>
// <p>Year</p>
// <input />
//       <button></button>
//     </div>
//   )
// }

//

const car = (props) => (
  <div>
    <p>
      <strong>Car name: {props.name}</strong>
    </p>
    <p>
      Year: <strong>{props.year}</strong>
      {props.children}
    </p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)
export default car

// () => (
//   <div>
//     <p>this is car component </p>
//     <p>
//       <strong>{Math.random()}</strong>
//     </p>
//   </div>
// )
