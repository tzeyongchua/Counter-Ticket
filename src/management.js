import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './context.js';
import Account from './Account.js'

export default function Management(){
    const context = useContext(UserContext);
    return (
        <div>
            <div className ="text-center">
                <h1>Account management page</h1>
                <h2>{context.latestNum}</h2>
                <Account />
            </div>
            <Link to="/">Customer Page</Link>
        </div>
    )
}