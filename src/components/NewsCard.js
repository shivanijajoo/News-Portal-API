// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => (
  <div className="news-card">
    {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
    <h3 className="news-title">{article.title}</h3>
    <p className="news-description">{article.description}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">Read more</a>
  </div>
);

export default NewsCard;


