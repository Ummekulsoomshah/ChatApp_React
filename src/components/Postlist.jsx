import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostList } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';
import Loadingspinner from './Loadingspinner';

function Postlist() {
  const { postlist, addInitialPost } = useContext(PostList)
  const [dataFetched, setDataFetched] = useState(false)

  useEffect(() => {
    const controller= new AbortController()
    const signal=controller.signal
    setDataFetched(true)
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data => {
        addInitialPost(data.posts)
        setDataFetched(false)
      });
      return()=>{
        controller.abort()
      }
  }, [])
  function handlefetchpost() { }
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