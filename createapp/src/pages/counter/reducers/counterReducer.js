//CounterReducer
// import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
export default (state = 0, action) => {
    switch (action.type) {
        case actionTypes.increment:
            return state + 1;
        case actionTypes.decrement:
            return state - 1;
        default:
            return state;
    }
}
