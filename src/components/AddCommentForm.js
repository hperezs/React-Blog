import React, { useState } from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () =>{
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({username, comment: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }
    return (
        <form className="add-comment-form border p-3 rounded">
            <h5 className='text-center'>Add a comment</h5>
            <hr></hr>
            <div className='form-group'>
                <label className=''>
                    <input type='text' className='form-control' placeholder='Name' value={username} onChange={ (event) => setUsername(event.target.value)}/>
                </label>
                <textarea rows='4' cols='50' className='form-control' placeholder='Comment' value={commentText} onChange={ (event) => setCommentText(event.target.value)}/>
                <button onClick={() => addComment()} type="button" name="" id="" className="btn btn-secondary">Send comment</button>
            </div>

        </form>
    )
}

export default AddCommentForm;