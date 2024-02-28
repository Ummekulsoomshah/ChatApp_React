
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postlist: [],
    addPost: () => { },
    deletePost: () => { }
});

const postlistReducer = (currPostList, action) => {
    let newPostList=currPostList
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postid
        );
    }
    if (action.type === "ADD_POST") {
        newPostList = [{
            id: Math.random().toString(),
            title: action.payload.postdata.title,
            content: action.payload.postdata.content,
            reactions: action.payload.postdata.reactions,
            userId: action.payload.postdata.userId,
            tags: action.payload.postdata.tags

        },
        ...currPostList]
    }

    return newPostList;
};

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POSTLIST);

    const addPost = (postdata) => { 
        dispatchPostList({ type: "ADD_POST", payload: {postdata,}, });
    };
    const deletePost = (
        postid
        ) => {
        dispatchPostList({ type: "DELETE_POST", payload: { postid, } ,});
    };

    return (
        <PostList.Provider value={{ postlist, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POSTLIST = [
    {
        id: "p1",
        title: "Introduction to AI",
        content: "Exploring the fascinating world of Artificial Intelligence",
        reactions: 10,
        userId: "u1",
        tags: ["technology", "AI"]
    },
    {
        id: "p2",
        title: "Machine Learning Basics",
        content: "Understanding the fundamentals of machine learning algorithms",
        reactions: 5,
        userId: "u2",
        tags: ["machine learning", "data science"]
    }
];

export default PostlistProvider;