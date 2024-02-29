import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostList } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';
import Loadingspinner from './Loadingspinner';

function Postlist() {
  const { postlist, dataFetched } = useContext(PostList)

  return (
    <>
      {dataFetched && <Loadingspinner />}
      {!dataFetched && postlist.length === 0 && <WelcomeMessage />}
      {!dataFetched && postlist.map((post) => {
          return <Post key={post.id} post={post} />;
        })}

    </>
  );
};

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





