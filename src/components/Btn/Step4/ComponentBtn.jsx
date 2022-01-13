import React from "react";

class ComponentBtn extends React.Component{
    constructor(){
        super();
        this.state={
            visible:true
        }
    }
    dissapier(){
        this.setState({visible:false})
    }
    render(){
        const {visible} = this.state;
        return visible && <button onClick={()=>this.dissapier()}>Soy un boton que desaparece</button>
    }
}
export default ComponentBtn