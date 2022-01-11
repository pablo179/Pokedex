import React from 'react';

const ComponentDiv5 = () => {
    const [text] = React.useState('soy un div');
    return (
        <div> {text} </div>
    )
}

export default ComponentDiv5;