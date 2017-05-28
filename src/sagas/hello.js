import { takeLatest, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import requester from '../services/requester';

function* getHelloRes() {
  try {
    const payload = yield call(requester, 'GET', '/hello');
    delay(1);
    const actCreater = createAction('hello/get/success');
    yield put(actCreater(payload));
  } catch (e) {
    const actCreater = createAction('hello/get/fail');
    yield put(actCreater({ msg: e }));
  }
}

function* watchers() {
  yield [
    takeLatest('hello/get', getHelloRes),
  ];
}

export default function* () {
  yield fork(watchers);
}
