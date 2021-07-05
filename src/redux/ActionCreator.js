import * as ActionTypes from "./ActionType";

export const addCommentCreator = (dishId, rating, author, comment) => {
    return{
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}}