import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { queryWeather } from './server/counter';
// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
export function* fetchUser(action) {
    try {
        // yield put({ type: "INCREMENT" });
        const user = yield call(queryWeather, 'LLL');
    } catch (e) {
        yield put({ type: "INCREMENT" });
    }
}


export function decrement() {
    alert('ssss')
}
/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
// function* mySaga() {
//     yield takeEvery("fetchUser", fetchUser);
// }

/*
  也可以使用 takeLatest
 
  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//     yield takeLatest("fetchUser", fetchUser);
// }

// export default mySaga;
function* watchIncrementAsync() {
    yield takeEvery("fetchUser", fetchUser)
}
export default function* mySaga() {
    yield all([
        // fetchUser(),
        watchIncrementAsync(),
    ])
}