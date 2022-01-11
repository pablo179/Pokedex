import React from "react";
class ComponentBtn3 extends React.Component{
    constructor(){
        super();
        this.state={
            text:"i'm a button"
        }
    }
    render(){
        return <button>{this.state.text}</button>
    }
}
export default ComponentBtn3;