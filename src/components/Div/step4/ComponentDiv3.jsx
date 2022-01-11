import React from "react";

const ComponentDiv3 = ( ) =>{
    const [visible, setVisible]= React.useState(true);
    const dissapier = () =>{
        setVisible(false);
    }
    return visible && <div onClick={dissapier}>Soy un div que desaparece 3</div>
}
export default ComponentDiv3