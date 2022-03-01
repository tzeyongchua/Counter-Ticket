/*
export default function Serve() {
    let i = 1;
    let queue = [];
    function TakeNum(){
        queue.push(i)
        console.log(queue)
        i++
    }
    return (
      <div className = "col-md-6 mx-auto my-5 text-center abc">
        <div className="row">
            <label>Now serving: </label>
            <p>latest serving number</p>
        </div>
        <label>Last Number: </label>
        <p>{i}</p>
        <button onClick={TakeNum}>Take a number</button>
    </div>
    );
  }
*/
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import UserContext from './context.js';
/*
export default class Serve extends React.Component{
    constructor(props) {
        super(props);
        this.state = {latestNum: 0, queue : []};
      }
    
    takeNum(){
        let i = this.state.latestNum
        i++
        let latestQueue = this.state.queue
        latestQueue.push(i)
        console.log(latestQueue)
        this.setState({
            latestNum: i,
            queue: latestQueue
        })  
    };

    render(){
        return (
        <div className = "col-md-6 mx-auto my-5 text-center abc">
            <div className="row">
                <label>Now serving: </label>
                <p>latest serving number</p>
            </div>
            <label>Last Number: </label>
            <p>{this.state.latestNum}</p>
            <button onClick={this.takeNum.bind(this)}>Take a number</button>
        </div>
        )}
}*/

export default function Serve(){
    const context = useContext(UserContext);
    function takeNum(){
        let i = context.latestNum;
        let latestQ = context.queue;

        i++;
        latestQ.push(i)
        console.log(latestQ)
        context.setLatestNum(i);
        context.setQueue(latestQ);
    }
    return (
    <div className = "col-md-6 mx-auto my-5 text-center serveContainer">
        <div className="row">
            <label>Now serving: </label>
            <p>latest serving number</p>
        </div>
        <label>Last Number: </label>
        <p>{context.latestNum}</p>
        <button onClick={takeNum}>Take a number</button>
    </div>
    )
}
  