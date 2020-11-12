import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const ArticlesListPage = () => (
    <section className="row justify-content-center">
        <div className="col-5 text-center">
            <h1 className="text-center mt-5">Articles</h1>
            <ArticlesList articles={articles} />            
        </div>
    </section>
);

export default ArticlesListPage;