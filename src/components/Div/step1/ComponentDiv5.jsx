import React from "react";

const ComponentDiv5= ()=>{
    const [text] = React.useState('Soy un div');
    return(
        <div>{text}</div>
    )
}
export default ComponentDiv5;