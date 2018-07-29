import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { queryWeather } from './server/counter';
// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser() {
    try {
        // yield put({ type: "INCREMENT" });
        //call 网络请求
        const user = yield call(queryWeather, 'LLL');
    } catch (e) {
        //put 发起action
        yield put({ type: "INCREMENT" });
    }
}
function* fetchUser1() {
    try {
        const user = yield call(queryWeather, 'zzz');
    } catch (e) {
        yield put({ type: "INCREMENT" })
    }
}

function decrement() {
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
// 只显示最新请求的，之前的被杀死？？？？ 测试并没有停止。。。。。
//     yield takeLatest("fetchUser", fetchUser);
// }

// export default mySaga;
function* watchIncrementAsync() {
    //用于多个fetchUser多个同时进行
    yield takeLatest("fetchUser", fetchUser)
}

export default function* mySaga() {
    yield takeEvery('fetchUser1', fetchUser1)
    yield takeEvery('fetchUser', fetchUser)
    // yield all([
    //     watchIncrementAsync(),
    //     fetchUser1("fetchUser1", fetchUser1),
    // ])
}