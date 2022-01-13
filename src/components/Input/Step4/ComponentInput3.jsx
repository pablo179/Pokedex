import React from "react";
const ComponentInput3 = ()=>{
    const [visible, setVisible]= React.useState(true);
    const dissapier = () =>{
        setVisible(false);
    }
    return visible && <input type="text" onClick={dissapier} placeholder="Soy un input que desaparece"/>
}
export default ComponentInput3