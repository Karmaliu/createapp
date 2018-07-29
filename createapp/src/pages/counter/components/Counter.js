import React, { Component } from 'react';
import Count from './Count';
import { connect } from 'react-redux';       //连通redux
// import { bindActionCreators } from 'redux'; //用于绑定多个action  不采用教程方法了
class Counter extends Component {
    increment = () => {
        this.props.dispatch({
            type: 'INCREMENT'
        })
    }
    decrement = () => {
        this.props.dispatch({
            type: 'Decrement'
        })
    }
    fetchUser = () => {
        this.props.dispatch({
            type: 'fetchUser'
        })
    }
    fetchUser1 = () => {
        this.props.dispatch({
            type: 'fetchUser1'
        })
    }
    counterActions = {
        increment: this.increment,
        decrement: this.decrement,
        fetchUser: this.fetchUser,
        fetchUser1:this.fetchUser1
    }
    render() {
        return (
            <div>
                <Count
                    counterActions={this.counterActions}
                    counter={this.props.counter}
                />
            </div>
        )
    }
}
//获取state数据
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter);