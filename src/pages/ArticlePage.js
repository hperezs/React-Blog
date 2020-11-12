import React, { useState, useEffect } from 'react';
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articles.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) { return <NotFoundPage /> }
    const otherArticles = articles.filter(article => article.name !== name);

    return (
        <section className="row justify-content-center mt-5">

            {/* Article Content */}
            <div className="col-7 text-center">
                <h1 className="pb-3">{article.title}</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <hr></hr>
            </div>

            {/* Upvotes */}
            <div className="col-7 text-right mr-3">
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            </div>


            {/* Article's comments */}
            <div className="comments-list-container col-7 mt-3 text-center">
                <CommentsList comments={articleInfo.comments} />
                <hr></hr>
            </div>

            {/* Add a comment */}
            <div className="row col-7 justify-content-center">
                <div className="text-center">
                    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                </div>
            </div>



            {/* Other Articles */}
            <div className="other-articles row text-center justify-content-center mt-5">
                <div className="col-8">
                    <h4>Other Articles: </h4>
                    <ArticlesList articles={otherArticles} />
                </div>
            </div>
        </section>
    )
};

export default ArticlePage;