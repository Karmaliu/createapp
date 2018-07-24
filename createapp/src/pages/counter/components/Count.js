import React, { Component } from 'react';

class Count extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.incrment()}>+</button>
                <button>-</button>
                总数为：
            </div>
        )
    }
}
export default Count;