import React from "react";

class ComponentBtn3 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <button>{this.props.text}</button>
    }
}
export default ComponentBtn3;