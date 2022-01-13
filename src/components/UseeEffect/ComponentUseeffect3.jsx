import React, { useState } from "react";

function ComponentUseeffect3(){
    const [isVisible, setIsVisible] = useState(false)
    const [text,setText] = useState('');
    const [text2,setText2] = useState('');
    React.useEffect(()=>{
        if(text !== '' && text2 !== ''){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    },[text,text2])
    return(
        <div>
            {isVisible && <div>Los dos inputs estan completos</div> }
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <input type="text" onChange={(e)=>setText2(e.target.value)} />
        </div>
    )
}
export default ComponentUseeffect3;