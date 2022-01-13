import React from "react";

function ComponentInput2(){

    const [text, setText] = React.useState("Soy dinamico"); 
    const changeText=(e)=>{
        setText(e.target.value);
    }
    return <div><input type="text" onChange={changeText} placeholder="Soy un input dinamico" /><div>{text}</div></div>

}
export default ComponentInput2;