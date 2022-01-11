import React from 'react'

class ComponentDiv extends React.Component {
    constructor(){
        super();
        this.state = {
            visible: true,
        }
    }
    dissapier() {
        this.setState({visible: false});
    }
    render() {
        const { visible } = this.state
        return visible && <div onClick={() => this.dissapier()} > {this.state.visible} Soy un div que desaparece</div>
    }
}

export default ComponentDiv