
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postlist: [],
    addPost: () => {},
    deletePost: () => {}
});

const postlistReducer = (currPostList, action) => {
    return currPostList;
};

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POSTLIST);

    const addPost = () => {};
    const deletePost = () => {};

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