import React, { Component } from 'react'

export default class Images extends Component {

    constructor(props){
        super(props);
        this.state = {interval: null};
    }

    componentDidMount(){
        console.log("Images Component Mounted");

        this.setState({
            interval: setInterval(() => {
                console.log('Hello');
        }, 1000)});
    }

    componentWillUnmount(){
        console.log("Images Component Unmounted");
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <img src="https://images.unsplash.com/photo-1610381812786-592c70146600?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
            alt="img loading"/>
        );
    }
}
