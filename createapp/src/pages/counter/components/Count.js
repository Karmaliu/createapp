import React, { Component } from 'react';

class Count extends Component {
    render() {
        const { counterActions: { increment, decrement, fetchUser, fetchUser1 }, counter
        } = this.props;
        return (
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => fetchUser()}>获取天气</button>
                <button onClick={() => fetchUser1()}>获取天气二</button>
                总数为：{counter}
            </div>
        )
    }
}
export default Count;