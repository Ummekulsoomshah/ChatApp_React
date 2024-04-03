import { ActionTypes } from "../constants/action-type";


export const addPost = (post) => { 
   return{
    type: ActionTypes.ADD_POST,
    payload: post,
   } 
};

export const deletePost = (postid) => {
  return { 
   type: ActionTypes.DELETE_POST,
    payload: postid ,
   };
};

export const addinitialPost = (posts) => {
   return{ 
      type: ActionTypes.ADD_INITIAL_POST,
       payload:  posts ,
      };
};