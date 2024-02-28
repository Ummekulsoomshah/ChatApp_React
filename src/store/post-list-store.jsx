
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postlist: [],
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { }
});

const postlistReducer = (currPostList, action) => {
    let newPostList=currPostList
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postid
        );
    }
    else if (action.type === "ADD_POST") {
        newPostList = [{
            id: Math.random().toString(),
            title: action.payload.postdata.title,
            body: action.payload.postdata.b,
            reactions: action.payload.postdata.reactions,
            userId: action.payload.postdata.userId,
            tags: action.payload.postdata.tags

        },
        ...currPostList]
    }
    else if (action.type === "ADD_INITIAL_POST") {
        newPostList = action.payload.posts;
    }

    return newPostList;
};

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostList] = useReducer(postlistReducer, []);

    const addPost = (postdata) => { 
        dispatchPostList({ type: "ADD_POST", payload: {postdata,}, });
    };
    const deletePost = (
        postid
        ) => {
        dispatchPostList({ type: "DELETE_POST", payload: { postid, } ,});
    };
    const addInitialPost = (posts) => { 
        dispatchPostList({ type: "ADD_INITIAL_POST", payload: {posts,}, });
    };

    return (
        <PostList.Provider value={{ postlist, addPost, deletePost ,addInitialPost}}>
            {children}
        </PostList.Provider>
    );
};


export default PostlistProvider;