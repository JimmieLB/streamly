import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from '../components/Search.jsx';
import Request from '../parse.js';
import socket from '../connection.js';
import axios from 'axios';
import Video from '../components/Video.jsx';

const Stream = () => {
  return (
    <div className="container">
      <h1>Streamly</h1>
      <Search/>
      <Video/>
    </div>
  );
}

export default Stream;