import axios from "axios";
import { Post } from "./type";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchFailurePost, fetchSuccessPost } from "./action";
import { FETCH_POST_LIST } from "./actionTypes";

const getPost = () =>
  axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);

function* fetchData() {
  try {
    const response = yield call(getPost);
    yield put(
      fetchSuccessPost({
        postList: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchFailurePost({
        error: e.message,
      })
    );
  }
}

function* postSaga() {
  yield all([takeEvery(FETCH_POST_LIST, fetchData)]);
}

export default postSaga;
