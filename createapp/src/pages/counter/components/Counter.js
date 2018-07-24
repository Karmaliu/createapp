import React, { Component } from 'react';
import Count from './Count';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
class Counter extends Component {
    incrment = () => {
        this.props.counterActions.increment();
    }
    render() {
        console.log('1111', this.props.counter);
        return (
            <div>
                <Count incrment={this.incrment} />
            </div>
        )
    }
}
//获取state数据
const mapStateToProps = state => {
    return {
        counter: state
    }
}
//分发action
const mapDispatchToProps = dispatch => {
    return { counterActions: bindActionCreators(actions, dispatch) }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);