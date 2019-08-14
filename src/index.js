// Steps 3.1_A
import React from 'react';

// Steps 3.1_B
import ReactDOM from 'react-dom';

// Steps 3.1_C
// ReactDOM.render(

// React.createElement('h2', null, 'Hello React JS'),

// Steps 3.1_F
// <h2>Hello React with JSX -- {Math.random()}</h2>,
// document.getElementById('root')
//);

// Steps 3.1_G
const color = Math.random() > 0.5 ? 'green' : 'red';

// // Steps 3.1_C
// ReactDOM.render(
//   // Steps 3.1_H
//   <h2 style={{color: color}}>
//     Hello React with JSX -- {Math.random()}
//   </h2>,
//   document.getElementById('root')
// );

// Steps 3.1_C
ReactDOM.render(
  // Steps 3.1_I
  <h2 className="text-center">
    Hello React with JSX
  </h2>,
  document.getElementById('root')
);
