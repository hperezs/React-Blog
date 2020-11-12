import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });

        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div className='upvotes-section'>
            <p className="article-upvotes font-italic text-muted">{upvotes} upvotes</p>
            <button className="btn btn-light upvote-btn mr-5" onClick={() => upvoteArticle()}>
                <i className="fas fa-chevron-up"></i>
            </button>
            
        </div>
    )
}

export default UpvotesSection;