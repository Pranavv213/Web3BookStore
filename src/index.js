import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
// https://v1docs.moralis.io/moralis-dapp/sending-assets/transfer-eth

ReactDOM.render(
 
    <MoralisProvider appId="18m9ty1qjvfIpVvS6QHtfmDGoumfbm9S5wDnAslC" serverUrl="https://8xavtihvznve.usemoralis.com:2053/server">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
