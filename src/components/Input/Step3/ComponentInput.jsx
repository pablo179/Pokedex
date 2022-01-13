import React from "react";

class ComponentInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <input type="text" data={this.props.placeholder} style={this.props.myStyles} />
    }
}
export default ComponentInput;