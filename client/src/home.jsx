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
    }, 2000);
    return () => clearInterval(interval);
  },[]);

  return (
    <>
    <div className="container">
      <a href={location.href + 'stream'}><div id="streamBtn"><a>Stream</a></div></a>
    </div>

    {
      rooms.map((room, index) => {
        return (<div className="streamItem"><a key={index} href={`${location.href}rooms/${room}`}>{room}</a></div>)
      })
    }
    </>
  );
}

export default Home;