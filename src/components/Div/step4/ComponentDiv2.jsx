import React from "react";

function ComponentDiv2(){
    const [visible,setVisible] = React.useState(true);
    function dissapier(){
        setVisible(false);
    }
    return visible && <div onClick={dissapier}>Soy un div que desaparece 2</div>
    
}
export default ComponentDiv2