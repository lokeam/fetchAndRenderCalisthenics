import React from 'react';
import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

/*------ Constants ------*/
const JP_URL = 'https://jsonplaceholder.typicode.com/photos?_start=1&_limit=20';
const PM_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

/*------ Services ------*/
class RESTService {
  constructor(endpoint, isAbsolute = false) {

   /** @type {String} fetch mode, default 'cors' */
    this._mode = 'cors';

   /** @type {String} https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials */
    this._credentials = 'omit';
    
    /** @type {Response} raw response from API request.*/
    this._rawResponse = null;
  } 

  /* Set the Fetch Mode */
 set mode(value) {
   this._mode = (/(cors|same-origin|navigation)/.test(value)) ? value : 'cors';
 }

 /* Utilizes fetch api to generate + make an AJAX request */
 _makeRequest(resource = '', data = null, method = 'GET', options) {
   const requestOptions = this._buildRequestOptions(data, method);
   const request = this._createRequestObj(resource, requestOptions);

   return fetch(request)
   .then((response) => {
     this._rawResponse = response;
     const json = response.json();
     
     if (!response.ok) {
       console.log('I am error, promise not ok');
       return Promise.reject(json);
     }
     console.log('returned json: ', json);
     return json;
   });
 }

 /* Create new Request Object based upon supplied resource and options */
 _createRequestObj(resource = '', options) {
   return new Request(resource, options);
 }

 /* Build out the inital request options for fetch call */
 _buildRequestOptions(data, method) {
   let requestOptions = {
     method,
     mode: this._mode
   };
   return requestOptions;
 }

 get(resource = '', data = {}) {
   /* could optionally create query string parameters here */
   return this._makeRequest(resource, null, 'GET');
 }
}

/*------ Hooks ------*/

/*------ Single Component ------*/
function App() {
  return (
    <div className="App">
      <nav className="fetch-app__nav">
        <div className="fetch-app__version-logo">
          <img className="fetch-app__version-logo-img" src={logo} alt="javascript logo" />
        </div>
        <div className="fetch-app__title">Fetch &amp; Render Calisthenics</div>
      </nav>
    </div>
  );
}

export default App;
