import React, { useState, useContext } from 'react';

import UserContext from './context.js';


export default function Account(){
    const context = useContext(UserContext);
    
    function callNext(){
        let currentQ = context.queue
        let status = context.status
        let currentNum
        let newQ = []
        if(currentQ.length == 0){
            alert("The queue is currently empty")
        }
        else if(status == 'red'){
            alert("Complete current number first")
        }
        else if(status == 'grey'){
            alert("You are currently offline")
        }
        else{
            currentNum = currentQ[0]
            newQ = currentQ.slice(1) 
            console.log(newQ)
            context.setStatus("red")
            context.setQueue(newQ)
            context.setCurrentNum(currentNum)
        } 
    }

    function completeCurrent(){
        let currentNum = context.currentNum
        if(currentNum == 0){
            alert("You are currently not processing number")
        }
        else{
            context.setCurrentNum(0);
            context.setStatus("green");
        }
    }

    return (
        <div>
            <div className='accountContainer col-md-6 mx-auto'>
                <h1>Account 1</h1>
                <h2>{context.currentNum}</h2>
                <div className="offlineContainer col-md-6 my-5 mx-auto">
                    <h3>Go offline: </h3>
                    
                    <label className="switch">
                        <input type="checkbox"
                        defaultChecked={context.checked}
                        onClick={(e) => {
                            if(context.status == 'red'){
                                alert("Please complete your current number before you go offline")
                                e.preventDefault() 
                            }
                            else{
                                if(context.checked == true){
                                    context.setStatus('green')
                                    context.setChecked(false)
                                }
                                else{
                                    context.setStatus('grey')
                                }
                                context.setChecked(!context.checked)
                                console.log(context.status)
                            }
                        }}
                        />
                        
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='col-md-6 my-5 mx-auto'>
                    <button onClick={completeCurrent}>Complete Current</button>
                </div>
                <div className='col-md-6 my-5 mx-auto'>
                    <button onClick={callNext}>Call next</button>
                </div>
                
            </div>
            
        </div>
        
    )
}