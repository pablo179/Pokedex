import React from "react";

const ComponentInput5 = ()=>{
    const [text] = React.useState('Soy un input');
    return <input type="text" placeholder={text} />
}
export default ComponentInput5;