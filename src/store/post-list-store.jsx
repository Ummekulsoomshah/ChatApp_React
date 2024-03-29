
import { createContext, useReducer ,useState,useEffect,} from "react";

export const PostList = createContext({
    postlist: [],
    addPost: () => { },
    deletePost: () => { },
    addinitialPost: () => { },
});

const postlistReducer = (currPostList, action) => {
    let newPostList=currPostList
    
    
    if (action.type === "ADD_INITIAL_POST") {
        newPostList = action.payload.posts;
    }
    else if (action.type === "ADD_POST") {
        newPostList = [action.payload.data,...currPostList]
    }
    else if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postid
        );
    }

    return newPostList;
};

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostList] = useReducer(postlistReducer, []);
  

    const addPost = (data) => { 
        dispatchPostList({ type: "ADD_POST", payload: {data,}, });
    };
    const deletePost = (postid) => {
        dispatchPostList({ type: "DELETE_POST", payload: { postid, } ,});
    };
    const addinitialPost = (posts) => {
        dispatchPostList({ type: "ADD_INITIAL_POST", payload: { posts, } ,});
    };

   
    return (
        <PostList.Provider value={{ postlist, addPost, deletePost ,addinitialPost}}>
            {children}
        </PostList.Provider>
    );
};


export default PostlistProvider;