import React from "react";

const ComponentInput3=()=>{
    const [text,setText]= React.useState("Soy dinamico");
    return <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Soy un input dinamico" />
        <div>{text}</div>
    </div>
}
export default ComponentInput3;