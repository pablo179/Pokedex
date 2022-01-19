import React, { useState } from "react";

function ComponentUseeffect4(){
    const [isVisible, setIsVisible] = useState(true);
   
    React.useEffect(()=>{
       const timer = setTimeout(() => {
           setIsVisible(false)
           clearTimeout(timer)
       }, 5000);
       
    })

    return isVisible &&  <div>Voy a desaparecer</div>
}
export default ComponentUseeffect4