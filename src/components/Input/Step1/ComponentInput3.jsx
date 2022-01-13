import React from "react";

class ComponentInput3 extends React.Component{
    constructor(){
        super();
        this.state={
            text:'Soy un input'
        }
        
    }
    render(){
        return <input type="text" placeholder={this.state.text} />
    }
}
export default ComponentInput3;