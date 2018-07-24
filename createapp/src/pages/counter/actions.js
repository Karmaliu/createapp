import * as actionTypes from './actionTypes';

export  const increment = () => {
    return {
        type: actionTypes.increment,
    }
}

export const decrement = () => ({
    type: actionTypes.decrement,
})