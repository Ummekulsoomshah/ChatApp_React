import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";

function Post({ post }) {
  return (
    <div className="card" style={{ width: "30rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
          </span></h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => {
          return <span className="badge bg-primary hashtag">{tag}</span>
        })}
        <div class="alert alert-primary notification" role="alert">
         {`This post has ${post.reactions} reactions`}
        </div>

      </div>
    </div>)
}
export default Post;