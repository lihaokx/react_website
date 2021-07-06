import * as ActionTypes from "./ActionTypes";
import { DISHES } from '../shared/dishes';


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

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(addDishes(DISHES));
        // dispatch(dishesFailed("No connection."));
    }, 2000);
}

export const dishesLoading = () => {
    return ( {
    type: ActionTypes.DISHES_LOADING
})};

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});