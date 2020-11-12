import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <div className="article-list-item">
                    <h3 className="mb-2">{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </div>
            </Link>
        ))}
    </>
)

export default ArticlesList;