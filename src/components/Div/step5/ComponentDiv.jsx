import React from "react";

class ComponentDiv extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div onClick={this.props.myFunction}>Soy un div con funcion dinamica</div>
    }
}
export default ComponentDiv;