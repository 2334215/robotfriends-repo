import React from 'react'; //react gives us the opportunity to use react-dom
import ReactDOM from 'react-dom'; //react-dom help us to connect to the website not mobile not virtual etc
import './index.css'; // ./ ni tuhain ijil folderoosoo haina gesen ug. jishee ni e
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'tachyons';
//import {robots} from './robots' // yagaad {} avch bgaa ve geheer export maani gantshan zuil butsaadag herev olon zuil butsaaval {} ashigladag bh ni ee.
ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
