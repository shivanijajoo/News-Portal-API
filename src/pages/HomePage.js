/*import React from 'react';
import NewsList from '../components/NewsList';
import './HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <header className="header">
      <div className="container">
        <h1 className="site-title">Education News Portal</h1>
        <p className="site-description">Stay updated with the latest news and trends in education.</p>
      </div>
    </header>

    <main className="main-content">
      <section className="top-headlines">
        <div className="container">
          <h2>Top Headlines in Education</h2>
          <NewsList />
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>We bring you the latest and most relevant news in the field of education. Our goal is to keep you informed about the trends, policies, and innovations shaping the educational landscape.</p>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Education News Portal. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default HomePage;*/

// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import './HomePage.css';

const API_KEY = '95cbdfe0e5194313b675621f31ef15ec'; // Replace with your actual API key
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news: {error.response ? error.response.data.message : error.message}</p>;

  return (
    <div className="home-page">
      <header className="header">
        <h1>News Portal</h1>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/archive">Archive</a>
        </nav>
      </header>

      <main className="main-content">
        <h2>Top Headlines</h2>
        <div className="news-list">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 News Portal. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;