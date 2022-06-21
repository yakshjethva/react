import React from 'react';
import {useState} from 'react';

function StateDemo() { 
  const [data,setData]= useState('Default Value'); 
  function StateDemo(){
    setData("Updated Value");
  }
  console.log("h");
  return (
    <div className="StateDemo">
      <h1>{data}</h1>
      <button onClick={StateDemo}>State</button>
    </div>
  );
}

export default StateDemo;
