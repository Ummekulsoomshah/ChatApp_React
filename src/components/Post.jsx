import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";
import { deletePost } from '../redux/actions/productAction';
import { useDispatch } from 'react-redux';
function Post({ post }) {
  const dispatch = useDispatch();
  const postid = post.id;
  return (
    <div className="card" style={{ width: "30rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          onClick={()=>dispatch(deletePost(postid))}
          >
            <MdDelete />
          </span></h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return <span key={tag} className="badge bg-primary hashtag">{tag}</span>
        })}
        <div className="alert alert-primary notification" role="alert">
         {`This post has ${post.reactions} reactions`}
        </div>

      </div>
    </div>)
}
export default Post;