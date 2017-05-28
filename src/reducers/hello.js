/* eslint no-useless-computed-key: 0, object-shorthand: 0, no-alert: 0 */
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const todos = handleActions({
  ['hello/get'](state) {
    return state.merge({
      loading: true,
    });
  },
  ['hello/get/success'](state, action) {
    alert(action.payload.data);
    return state.merge({
      loading: action.payload,
    });
  },
  ['hello/get/fail'](state) {
    return state.merge({
      loading: false,
    });
  },
}, Immutable.fromJS({
  loading: false,
}));

export default todos;
