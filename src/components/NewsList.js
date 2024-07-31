// src/components/NewsList.js
import React from 'react';
import NewsCard from './NewsCard';
import newsData from './NewsData'; // Import the static news data

const NewsList = () => (
  <div className="news-list">
    {newsData.length > 0 ? (
      newsData.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))
    ) : (
      <p>No news articles available.</p>
    )}
  </div>
);

export default NewsList;


