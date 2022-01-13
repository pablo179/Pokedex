import React, { useState } from "react";
function ComponentUseeffect2(){
    const [total,setTotal] = useState(0);
    const [isVisible, setIsVisible] = useState(true)
    const Add = ()=>{
        setTotal(total+1);
    }
    const Substract = ()=>{
        setTotal(total-1)
    }
    React.useEffect( ()=>{
        if(total === 10){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    },[total])
    return(
        <div>
           {isVisible && <div className="number"> {total} </div>}
            <button className="button " onClick={Add}>+</button>
            <button className="button" onClick={Substract}>-</button>
        </div>
    )
}
export default ComponentUseeffect2