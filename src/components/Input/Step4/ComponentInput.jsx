import React from "react";

class ComponentInput extends React.Component{
    constructor(){
        super();
        this.state={
            visible:true
        }
    }
    dissapier(){
        this.setState({visible:false});
    }
    render(){
        return this.state.visible && <input type="text" onClick={()=>{this.dissapier()}} placeholder="Soy un input que desaparece" />
    }
}
export default ComponentInput 