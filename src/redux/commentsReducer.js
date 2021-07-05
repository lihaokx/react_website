import {COMMENTS} from '../shared/comments';
import * as ActionTypes from "./ActionType";

export const  Comments = (state=COMMENTS, action)=> {
    console.log("action.payload before: ", action.payload);
    switch (action.type){
        case ActionTypes.ADD_COMMENT :
            
            var comment = action.payload;
            // console.log("action.payload febore: ", action.payload);
            comment.date = new Date().toISOString();
            comment.id = state.length;
            
            console.log("comment after: ", comment); 
    
            return state.concat(comment);
            
        default:
            return state;
    }
}

