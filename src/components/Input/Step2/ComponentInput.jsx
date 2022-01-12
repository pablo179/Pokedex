import React from "react";

class ComponentInput extends React.Component{
    constructor(){
        super();
        this.state ={
            text:"Soy dinamico"
        }
    }
    newText(e){
        this.setState({text: e.target.value});
    }
    render(){
        return(
           <div> <input type="text" onChange={(e)=>this.newText(e)} placeholder="Soy un input dinamico" /> <div>{this.state.text}</div> </div>
        )
    }

}
export default ComponentInput;