import React from "react";

function ComponentInput2(){
    const [text, setText] = React.useState("Soy dinamico");
    return <div><input type="text" onChange={function onChanges(e){setText(e.target.value)}} placeholder="Soy un input dinamico" /><div>{text}</div></div>
}
 /*   return <div><input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Soy un input dinamico" /> <div>{text}</div> </div>
*/
export default ComponentInput2;