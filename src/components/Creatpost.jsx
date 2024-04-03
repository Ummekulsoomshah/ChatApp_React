import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addPost } from "../redux/actions/productAction";
function Creatpost() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target.form);
        console.log("formdata",formData);
        creatPostaction(formData);
    }
    const creatPostaction = async (formData) => {
        //   const formData = await data.request.formData();
        const postData = Object.fromEntries(formData);
        postData.tags = postData.tags.split(' ');

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(addPost(data)); // dispatch the addPost action with the new post data
            });

        navigate('/');
    };
    return (
        <form method="POST" className='formarea'>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">userId</label>
                <input type="text" name="userId" className="form-control" id="userId" placeholder='Enter your userId' />

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder='what are you feeling today...' />

            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea rows={4} type="text" name="body" className="form-control" id="body" placeholder='Briefly describe it' />

            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="text" name="reactions" className="form-control" id="reactions" placeholder='How many peope reaed to this post' />

            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter tags here</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder='add hashtag and space between them' />

            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Post</button>
        </form>)
}


// export async function creatPostaction(data){  
//     const dispatch=useDispatch()
//     const formData=await data.request.formData()
//     const postData=Object.fromEntries(formData)
//     postData.tags=postData.tags.split(' ')
//     console.log(postData)
//     fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postData)
// })
//     .then(res => res.json())
//     .then(data => {
//         dispatch(addpost(data));
//     });
//     return redirect('/')
// }

export default Creatpost;