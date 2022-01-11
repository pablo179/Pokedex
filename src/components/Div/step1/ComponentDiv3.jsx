import React from 'react';

class ComponentDiv3 extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Soy un div'
        }
    }
    render() {
        return(
            <div> {this.state.text} </div>
        )
    }
}

export default ComponentDiv3