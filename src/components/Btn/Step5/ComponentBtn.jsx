import React from "react";

class ComponentBtn extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <button onClick={this.props.myFunction}>Soy un boton con funcion dinamica</button>
    }
}
export default ComponentBtn;