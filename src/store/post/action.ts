import {
  FETCH_POST_FAILURE,
  FETCH_POST_LIST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";
import {
  FetchPostFailureRequest,
  FetchPostRequest,
  FetchPostSuccessRequest,
  PostFailureResponse,
  PostSuccessResponse,
} from "./type";

export const fetchPostList = (): FetchPostRequest => ({
  type: FETCH_POST_LIST,
});

export const fetchSuccessPost = (
  payload: PostSuccessResponse
): FetchPostSuccessRequest => ({ type: FETCH_POST_SUCCESS, payload });

export const fetchFailurePost = (
  payload: PostFailureResponse
): FetchPostFailureRequest => ({
  type: FETCH_POST_FAILURE,
  payload,
});
