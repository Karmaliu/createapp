import React, { Component } from 'react';

class Count extends Component {
    render() {
        const { counterActions: { increment, decrement, fetchUser, fetchUser1 }, counter
        } = this.props;
        const { weater } = this.props;
        let WeaterList = null;
        console.log(this.props)
        if (weater.weater) {
            WeaterList = weater.weater.map((child) => {
                return <li key={child.id}>{child.province}</li>
            })
        }
        return (
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => fetchUser()}>获取省会</button>
                <button onClick={() => fetchUser1()}>获取天气二</button>
                总数为：{counter}
                <div>
                    {WeaterList ?
                        <ul>
                            {WeaterList}
                        </ul>
                        : ''
                    }
                </div>
            </div>
        )
    }
}
export default Count;