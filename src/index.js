import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth/1000+'px';

window.onresize = ()=>{
  if(window.innerWidth/1000<1.5){
    document.getElementsByTagName('html')[0].style.fontSize = '1.5px';
  }else{
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth/1000+'px';
  }
  
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
