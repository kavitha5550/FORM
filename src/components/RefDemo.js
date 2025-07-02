// import React, { useEffect, useRef, useState } from "react";
// import song1 from "./Vazhithunaiye.mp3";

import React ,{useRef}  from "react";

const RefDemo = () => {
  const useref=useRef()

  // const inputRef = useRef(null);
  // const audioRef = useRef(null);
  

  // const[count,setCount]=useState(0)
  // const timerRef=useRef(count)

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  // const playSong = () => {
  //   audioRef.current.play();
  // };

  // const stopSong = () => {
  //   audioRef.current.pause();
  // };

  // const startTimer=()=>{
  //    setInterval(()=>{
  //       setCount(count+1)
  //    },1000)
  // }

  // const pauseTimer=()=>{
    
  // }

  // const resetTimer=()=>{
    
  // }
  return (
    <div>saxsaa
          <input  className="border" type="text" />
      {/* <center>
        Referring DOM
        <hr />
        <input
          className="border"
          ref={inputRef}
          type="text"
          placeholder="Enter your Name"
        />
        <audio controls ref={audioRef}>
          <source src={song1}></source>
        </audio>
        <input type="button" value="Play" onClick={playSong} />
        <input type="button" value="Stop" onClick={stopSong} />

        <hr />

        <p>Current Timer: {count}</p>
        <br />
        <br />
        <input className="border" type="button" value="Start Timer" onClick={startTimer} />
        <input className="border" type="button" value="Pause Timer" onClick={pauseTimer} />
        <input className="border" type="button" value="Reset Timer" onClick={resetTimer} />
      </center>
    </div> */}
    </div>
  );
};

export default RefDemo;
