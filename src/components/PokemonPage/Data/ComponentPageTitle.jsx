import React from "react";

const ComponentPageTitle= (props) =>{
    return <div className="componentPageData--title">
            <div className="componentPageData--title_name">{props.name}</div>
            <div className="componentPageData--title_number">{props.number}</div>
        </div>
}
export default ComponentPageTitle