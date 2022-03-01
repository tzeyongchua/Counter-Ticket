import React, { useState, useContext } from 'react';
import UserContext from './context.js';

export default function Counter() {
  

  const context = useContext(UserContext);
    
    
    
    return (
      
      <div className = "col-md-6 mx-auto my-5 text-center counterContainer">
        
        <h1>Counter 1</h1>
        <div className={context.status}></div>
        <div>
          <label>Current Number</label>
          <p>{context.currentNum}</p>
        </div>
    </div>
    );
  }