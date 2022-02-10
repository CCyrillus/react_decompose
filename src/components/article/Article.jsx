import React from 'react';
import './Article.css';
import ArticleParagraph from './article_paragraph/ArticleParagraph';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <ArticleParagraph />
    </article>
  );
}

export default Article;
