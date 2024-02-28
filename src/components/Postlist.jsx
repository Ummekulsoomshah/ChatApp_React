import { useContext } from 'react';
import Post from './Post';
import { PostList} from '../store/post-list-store';

function Postlist() {
    const { postlist } = useContext(PostList)
    console.log(postlist)
    return (
    <>
        {postlist.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
     
    </>
    );
};

export default Postlist;