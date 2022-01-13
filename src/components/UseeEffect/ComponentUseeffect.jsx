import React from "react";

function ComponentUseeffect(){
    const [text,setText] = React.useState('');
    React.useEffect(()=>{
        setText('hola')
    },[]);
    return(
        <div>
            soy un useEffect
            {text}
        </div>
    )
}
export default ComponentUseeffect;