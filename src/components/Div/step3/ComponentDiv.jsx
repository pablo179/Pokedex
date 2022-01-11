import React from "react";

class ComponentDiv extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div style={this.props.myStyles}>{this.props.text}</div>
    }
}
export default ComponentDiv;
