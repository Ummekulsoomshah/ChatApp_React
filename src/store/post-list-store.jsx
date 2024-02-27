
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
        title: "This is a post1",
        content: "This is the content of the post",
        reactions: 2,
        userId: "u1",
        tags: ["t1", "t2"]
    },
    {
        id: "p2",
        title: "This is a post3",
        content: "This is the content of the post3",
        reactions: 2,
        userId: "u3",
        tags: ["t3", "t4"]
    }
];

export default PostlistProvider;