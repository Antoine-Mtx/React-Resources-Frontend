import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from '../constants/commentConstants.js';
import commentService from '../services/commentService.js';

// Action creators for adding a comment
export const addCommentRequest = () => ({
  type: ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = (comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentFailure = (error) => ({
  type: ADD_COMMENT_FAILURE,
  payload: error,
});

export const addComment = (resourceId, commentText) => async (dispatch) => {
  dispatch(addCommentRequest());
  try {
    const comment = await commentService.addComment(resourceId, commentText);
    dispatch(addCommentSuccess(comment));
  } catch (error) {
    dispatch(addCommentFailure(error.message));
  }
};

// Action creators for fetching comments of a resource
export const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const fetchComments = (resourceId) => async (dispatch) => {
  dispatch(fetchCommentsRequest());
  try {
    const comments = await commentService.getComments(resourceId);
    dispatch(fetchCommentsSuccess(comments));
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message));
  }
};
