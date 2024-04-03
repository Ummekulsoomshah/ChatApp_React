import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addinitialPost } from '../redux/actions/productAction';
function Postlist() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)
  console.log(posts)
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data.posts)
        dispatch(addinitialPost(data.posts)); // dispatch the action to store the posts in your Redux store
      });
  }, [dispatch]);

  return (
    <>
      {posts.length === 0 && <WelcomeMessage />}
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

// export const postLoader = () => {
//   return fetch('https://dummyjson.com/posts')
//   .then(res => res.json())
//   .then(data => {
//   return data.posts
//     // setDataFetched(false)
//   });
// }

export default Postlist;
























// the code which adds new posts
// import { useContext, useEffect, useState } from 'react';
// import Post from './Post';
// import { PostList } from '../store/post-list-store';
// import WelcomeMessage from './WelcomeMessage';

// function Postlist() {
//   const { postlist,addInitialPost } = useContext(PostList)
// const [dataFetched,setDataFetched]=useState(false)

// if(dataFetched){}
//   function handlefetchpost() {
//     fetch('https://dummyjson.com/posts')
//     .then(res => res.json())
//     .then(data =>addInitialPost(data.posts));
//   }
//   return (
//     <>
//       {postlist.length === 0 && <WelcomeMessage fetchPost={handlefetchpost} />}
//       {postlist.map((post) => {
//         return <Post key={post.id} post={post} />;
//       })}

//     </>
//   );
// };

// export default Postlist;





