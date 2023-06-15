import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import socket from './connection.js';
import axios from 'axios';

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      axios.get('allRooms').then((data) => {
        setRooms(data.data);
      }).catch((err) => {
        console.error(err);
      })
    }, 5000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="container">
      <a href={location.href + 'stream'}> Stream</a>
      {
        rooms.map((room, index) => {
          return (<div><br/><a key={index} href={`${location.href}rooms/${room}`}>{room}</a></div>)
        })
      }
    </div>
  );
}

export default Home;