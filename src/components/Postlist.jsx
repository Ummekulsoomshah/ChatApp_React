import { useContext } from 'react';
import Post from './Post';
import { PostList} from '../store/post-list-store';

function Postlist() {
    const { postlist } = useContext(postList)
    console.log(postlist)
    return (
    <>
        {/* {postlist.map((post) => {
          return console.log(post)
        })}
      */}
<Post/>
    </>
    );
};

export default Postlist;