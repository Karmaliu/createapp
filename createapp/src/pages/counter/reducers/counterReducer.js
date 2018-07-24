//CounterReducer
// import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
export default (state = 0, action) => {
    console.log(state)
    switch (action.type) {
        case actionTypes.increment:
            return state + 1;
        case actionTypes.decrement:
        default:
            return state;
    }
}
