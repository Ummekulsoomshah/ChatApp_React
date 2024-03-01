import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import { useLoaderData } from 'react-router-dom';

function Postlist() {
 const postlist = useLoaderData();
  return (
    <>
      {postlist.length === 0 && <WelcomeMessage />}
      {postlist.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
};

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => {
  return data.posts
    setDataFetched(false)
  });
}

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





