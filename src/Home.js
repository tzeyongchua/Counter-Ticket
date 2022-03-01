import Serve from './serve.js'
import Counter from './counter.js'
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Home() {
    return (
      <div>
        <div className='col-md-12 mx-auto text-center'>
          <h1>Customer view</h1>
          <Serve />
          <Counter />
        </div>
        <Link to="/management">Management Page</Link>
      </div>
      
    );
  }