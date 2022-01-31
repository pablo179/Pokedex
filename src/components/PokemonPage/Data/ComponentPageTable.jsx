import React from "react";

const ComponentPageTable=({height,category,weight,abilities})=>{
    return <div>
        <div>
            <label htmlFor="">Altura</label>
            <label htmlFor="">{height}</label>
        </div>
        <div>
            <label htmlFor="">Categoria</label>
            <label htmlFor="">{category}</label>
            </div>
        <div>
            <label htmlFor="">Peso</label>
            <label htmlFor="">{weight}</label>
            </div>
        <div>
            <label htmlFor="">Habilidad</label>
            <label htmlFor="">{abilities}</label>
            </div>
        <div>
            <label htmlFor="">Genero</label>
            
            </div>
    </div>
}
export default ComponentPageTable