import React from "react";

class ComponentDiv3 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {text} = this.props;
        return <div>{text}</div>
    }

}
export default ComponentDiv3