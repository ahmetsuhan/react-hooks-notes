import React, { Component } from 'react'

export default class ClassTimer extends Component {
    
    interval

    state={
        timer:0,
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((prev) => ({
                timer:prev.timer+1
            }));
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }



    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={()=> clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}
