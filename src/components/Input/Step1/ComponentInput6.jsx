import React from "react";

class ComponentInput6 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <input type="text" placeholder={this.props.text} />
    }
}
export default ComponentInput6;