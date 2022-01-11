import React from 'react'

class ComponentDiv6 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div> {this.props.text} </div>
        )
    }
}

export default ComponentDiv6;