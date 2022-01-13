import React from "react";

class ComponentInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return  <input type="text" onClick={this.props.myFunction} placeholder="Soy un input con funcion dinamica " />
    }
}
export default ComponentInput