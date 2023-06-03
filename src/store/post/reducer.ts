import {
  FETCH_POST_FAILURE,
  FETCH_POST_LIST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";
import { PostActionType, PostState } from "./type";

export const PostInitialState: PostState = {
  padding: false,
  data: [],
  error: null,
};

export default (state = PostInitialState, action: PostActionType) => {
  switch (action.type) {
    case FETCH_POST_LIST:
      return { ...state, padding: true };
    case FETCH_POST_SUCCESS:
      return { ...state, padding: false, data: action.payload.postList };
    case FETCH_POST_FAILURE:
      return { ...state, padding: false, error: action.payload.error };
    default:
      return { ...state };
  }
};
