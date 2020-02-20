import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

/*  * = async   */
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

/* takeLatest = dispara 1 vez, msm se clicar muitas vezes */

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
