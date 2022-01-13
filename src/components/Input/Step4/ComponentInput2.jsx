import React from "react";
function ComponentInput2(){
    const [visible,setVisible] = React.useState(true);
    function dissapier(){
        setVisible(false);
    }
    return visible && <input type="text" onClick={dissapier} placeholder="Soy un input que desaparece"/>
}
export default ComponentInput2