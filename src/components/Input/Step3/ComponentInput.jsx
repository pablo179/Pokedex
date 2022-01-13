import React from "react";

class ComponentInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <input type="text" placeholder={this.props.data} style={this.props.myStyles} />
    }
}
export default ComponentInput;