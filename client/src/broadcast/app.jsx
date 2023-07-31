import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from '../components/Search.jsx';
import Request from '../parse.js';
import socket from '../connection.js';
import axios from 'axios';
import Video from '../components/Video.jsx';
let url = location.href.split('/');
url = url[url.length - 1];
console.log(url);
let canvas;
let context;

const Rooms = () => {
  useEffect(() => {
    socket.emit('joining', url);
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d');
    socket.on('streamData', (data) => {
      var img=new Image();
      img.onload=start;
      img.src=data;
      function start(){
        context.drawImage(img,0,0,1440/5,900/5);
      }
    })
  });
  return (
    <div className="container">
      <canvas id='canvas' style={{width: 1440/3, height: 900/3}}></canvas>
    </div>
  );
}

export default Rooms;