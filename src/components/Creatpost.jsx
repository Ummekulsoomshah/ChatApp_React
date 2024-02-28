import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef,useContext } from 'react';
import { PostList} from '../store/post-list-store';
function Creatpost(){
    const {addPost}=useContext(PostList);



    const userId=useRef();
    const title=useRef();
    const body=useRef();
    const reactions=useRef();
    const tags=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const enteredUserId=userId.current.value;
        const enteredTitle=title.current.value;
        const enteredBody=body.current.value;
        const enteredReactions=reactions.current.value;
        const enteredTags=tags.current.value.split(" ");
        const postData={
            userId:enteredUserId,
            title:enteredTitle,
            body:enteredBody,
            reactions:enteredReactions,
            tags:enteredTags
        }
        addPost(postData);
        userId.current.value='';
        title.current.value='';
        body.current.value='';
        reactions.current.value='';
        tags.current.value='';
    }




    return (
     <form className='formarea' onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="userid" className="form-label">UserId</label>
                <input type="text"  ref={userId}  className="form-control" id="userid" placeholder='Enter your userId' />
                   
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" ref={title} className="form-control" id="title"  placeholder='what are you feeling today...'/>
                   
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea rows={4} type="text"  ref={body} className="form-control" id="body" placeholder='Briefly describe it'/>
                   
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="text"  ref={reactions}  className="form-control" id="reactions" placeholder='How many peope reaed to this post'/>
                   
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter tags here</label>
                <input type="text"  ref={tags}  className="form-control" id="tags" placeholder='add hashtag and space between them'/>
                   
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>)
  
    
}

export default Creatpost;