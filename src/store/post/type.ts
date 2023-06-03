import {
  FETCH_POST_FAILURE,
  FETCH_POST_LIST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  padding: boolean;
  data: Post[];
  error: Error | string | null;
}

export interface PostSuccessResponse {
  postList: Post[];
}

export interface PostFailureResponse {
  error: Error | string | null;
}

export interface FetchPostRequest {
  type: typeof FETCH_POST_LIST;
}

export interface FetchPostSuccessRequest {
  type: typeof FETCH_POST_SUCCESS;
  payload: PostSuccessResponse;
}

export interface FetchPostFailureRequest {
  type: typeof FETCH_POST_FAILURE;
  payload: PostFailureResponse;
}

export type PostActionType =
  | FetchPostRequest
  | FetchPostSuccessRequest
  | FetchPostFailureRequest;
