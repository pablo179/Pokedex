import React from "react";

function ComponentBtn2(){
    const [visible,setVisible] = React.useState(true);
    function dissapier(){
        setVisible(false);
    }
    return visible && <button onClick={dissapier}>Soy un boton que desaparece 2</button>
}
export default ComponentBtn2