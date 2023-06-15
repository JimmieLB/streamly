import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socket from '../connection.js';

function startCapture(displayMediaOptions) {
  return navigator.mediaDevices
    .getDisplayMedia(displayMediaOptions)
    .catch((err) => {
      console.error(err);
      return null;
    });
}
let settings = {
  video: {
    displaySurface: "window",
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
    suppressLocalAudioPlayback: true,
  },
  surfaceSwitching: "include",
  selfBrowserSurface: "exclude",
  systemAudio: "exclude",
};
let context;
let canvas;

const Video = ({ source }) => {

  const [a, setA] = useState(0);
  const [data, setData] = useState([]);
  const [stream, setStream] = useState(null);
  const [count, setCount] = useState(0);

  let refresh = () => {
    console.log('size', context.width, context.height)
    // context.drawImage(document.getElementById('video'),0,0,720,450,0,0,720,450);
    // let obj = stream.getVideoTracks()[0].getSettings();
    // console.log(obj);
    context.drawImage(document.getElementById('video'),0,0,1440,900,0,0,300,150);
    socket.emit('streaming', canvas.toDataURL('image/jpeg', 1));
    // console.log(stream.getVideoTracks()[0].getSettings().width);
    // console.log(context.canvas.clientWidth);
  };

  useEffect(() => {
    canvas = document.getElementById('context')
    context = canvas.getContext('2d');
  })

  useEffect(() => {
    console.log('useEffect');
    startCapture(settings).then((data) => {
      setStream(data);
      let vidObject = document.getElementById('video');
      vidObject.srcObject = data;
    })
  }, [a]);

  useEffect(() => {
    console.log(stream);
  }, [stream])

  useEffect(() => {
    if (stream) {
      console.log(stream.getVideoTracks()[0].getSettings().width);
      console.log(stream.getVideoTracks()[0].getSettings().height);
    }
  },[count, stream]);

  useEffect(() => {
    let interval = setInterval(() => {
      // refresh();
      refresh();
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      { socket.id }
      {/* <canvas id="context"></canvas> */}
      <canvas id="context"></canvas>
      <video id="video" hidden={false} autoPlay ></video>
    </div>
  );
}

export default Video;