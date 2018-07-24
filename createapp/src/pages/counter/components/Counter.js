import React, { Component } from 'react';
import Count from './Count';
import { connect } from 'react-redux';       //连通redux
import { bindActionCreators } from 'redux'; //用于绑定多个action
import * as actions from '../actions';
class Counter extends Component {
    increment = () => {
        return this.props.counterActions.increment();
    }
    decrement = () => {
        return this.props.counterActions.decrement();
    }
    counterActions = {
        increment: this.increment,
        decrement: this.decrement
    }
    render() {
        const counter = this.props;
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
//分发action
const mapDispatchToProps = dispatch => {
    return { counterActions: bindActionCreators(actions, dispatch) }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);