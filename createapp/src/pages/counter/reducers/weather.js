//CounterReducer
// import * as actions from '../actions';


export default (state = {}, action) => {
    console.log(action)
    // console.log(action)
    switch (action.type) {
        case 'saveResult':
            return { ...state, weater: action.payload }
        default:
            return state;
    }
}
