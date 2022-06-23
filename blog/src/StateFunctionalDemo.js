import React from 'react';
import {useState} from 'react';

function StateFunctionalDemo() { 
  const [data,setData]= useState('Default Value'); 
  function StateDemo(){
    setData("Updated Value");
  }
  return (
    <div className="StateDemo">
      <h1>{data}</h1>
      <button onClick={StateDemo}>State</button>
    </div>
  );
}

export default StateFunctionalDemo;
