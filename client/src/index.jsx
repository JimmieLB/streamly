import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Request from './parse.js';
import socket from './connection.js';
import axios from 'axios';
import Video from './components/Video.jsx';
import Stream from './stream/app.jsx';
import Rooms from './broadcast/app.jsx';
import Home from './home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    // <div className="container">
    //   <h1>Github Fetcher</h1>
    //   <Search/>
    //   <Video/>
    // </div>
    <Router>
      <Routes>
        <Route exact path='/' exact element={<Home/>} />
        <Route path='/stream' element={<Stream/>} />
        <Route path='/rooms/:name' element={<Rooms/>} />
      </Routes>
    </Router>
  );
}


// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = '/css/style.css';
// document.getElementsByTagName('HEAD')[0].appendChild(link);

ReactDOM.render(<App />, document.getElementById('app'));