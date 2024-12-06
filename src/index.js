
// import React from 'react';
// import ReactDom from 'react-dom';

// // ReactDom.render(
// //   <>
// //     <h1> List of 5 best web Series</h1>
// //     <ol>
// //       <li>Breading bed</li>
// //       <li>Money Heist</li>
// //       <li>Game of Thorones</li>
// //       <li>Family man</li>
// //     </ol>
// //   </>,
// //   document.getElementById('root')
// // )

// //expression
// // const fname= "ab";
// // ReactDom.render(
// //   <>
// //     <h1>my first name is {fname}</h1>
// //     <p> adding numbeer {2+5}</p>
// //   </>,
// //   document.getElementById('root')
// // )

// //template literrals

// // const fname="ab";
// // const lname="Ti";
// // ReactDom.render(
// //   <>
// //    <h1>my name is {`${fname} ${lname}`}</h1>
// //   </>,
// //   document.getElementById('root')
// // )


// // challenge 2 

// const name= "abhisek";
//  const currDate= new Date().toLocaleDateString();
//  const currTime = new Date().toLocaleTimeString();

// ReactDom.render(
//   <>
//     <h1>Hello,  my name is {name}</h1>
//     <p> Today current date is {currDate}</p>
//     <p> current time is {currTime}</p>
   
//   </>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();