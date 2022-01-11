import React from "react";

class ComponentBtn extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <button>{this.props.text}</button>
    }
}
export default ComponentBtn;