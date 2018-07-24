import React, { Component } from 'react';

class Count extends Component {
    render() {
        const { counterActions: { increment, decrement }, counter
        } = this.props;
        return (
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                总数为：{counter}
            </div>
        )
    }
}
export default Count;