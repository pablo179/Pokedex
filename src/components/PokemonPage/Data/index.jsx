import React  from "react";
import ComponentPageTitle from './ComponentPageTitle';
import ComponentPageDescription from './PokemonPageDescription'
import ComponentPageImage from './ComponentPageImage'
import ComponentPageTable from './ComponentPageTable'
const ComponentPageData = (props)=>{
    return <div className="componentPageData">
        <ComponentPageTitle name={props.name} number={props.number} /> 
        
        <div className="componenPageData--">
            <ComponentPageImage image={props.image}/>
            <ComponentPageDescription description={props.description}/>
            <ComponentPageTable height={props.height} category={props.category} weight={props.weight} abilities={props.abilities}/>
        </div>
    </div>
}

export default ComponentPageData