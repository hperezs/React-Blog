import React from 'react';

const CommentsList = ({ comments }) => {

    if (comments.length < 1) {
        return (
            <section className="row justify-content-center">
                <div className="col-6">
                    <div className="comments-title d-inline-flex">
                        <h4>Comments</h4>
                        <i className="far fa-comments fa-lg ml-3 align-self-end"></i>
                    </div>

                    <div className="row justify-content-center font-italic py-3">
                        No comments yet.
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className="row justify-content-center">
            <div className="col-6">
                <div className="comments-title d-inline-flex">
                    <h4>Comments</h4>
                    <i class="far fa-comments fa-lg ml-3 align-self-end"></i>
                </div>

                <div className="row justify-content-center">
                    {comments.map((comment, key) => (
                        <div key={key} className="comment-container col-8 my-3">
                            <h5>{comment.username}</h5>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommentsList;