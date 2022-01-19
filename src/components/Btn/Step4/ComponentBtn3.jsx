import React from "react";

const ComponentBtn3 = ()=>{
    const [visible, setVisble] = React.useState(true);
    const dissapier = ()=>{
        setVisble(false);
    }
    return visible && <button onClick={dissapier}>Soy un boton que desaparece 3</button>
}
export default ComponentBtn3;