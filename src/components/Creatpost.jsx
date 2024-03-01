import { Form, redirect } from "react-router-dom"


function Creatpost() {

    return (
        <Form method="POST" className='formarea'>
            <div className="mb-3">
                <label htmlFor="userid" className="form-label">UserId</label>
                <input type="text" name="userid" className="form-control" id="userid" placeholder='Enter your userId' />

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder='what are you feeling today...' />

            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea rows={4} type="text" name="body"  className="form-control" id="body" placeholder='Briefly describe it' />

            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="text" name="reactions"  className="form-control" id="reactions" placeholder='How many peope reaed to this post' />

            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter tags here</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder='add hashtag and space between them' />

            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>)
}


export async function creatPostaction(data){  
    const formData=await data.request.formData()
    const postData=Object.fromEntries(formData)
    postData.tags=postData.tags.split(' ')
    console.log(postData)
    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
    return redirect('/')
}

export default Creatpost;