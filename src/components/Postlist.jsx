import { useContext } from 'react';
import Post from './Post';
import { PostList} from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

function Postlist() {
    const { postlist,addInitialPost } = useContext(PostList)
    console.log(postlist)
    function handlefetchpost(){
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>addInitialPost(data.posts));
    }
    return (
    <>
    {postlist.length===0 && <WelcomeMessage fetchPost={handlefetchpost}/>}
        {postlist.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
     
    </>
    );
};

export default Postlist;