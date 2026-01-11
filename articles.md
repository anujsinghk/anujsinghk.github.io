---
layout: default
title: Articles
description: Technical articles and blog posts
permalink: /articles/
---

<section class="articles-section">
  <h1 class="section-title">Articles</h1>
  <p class="subtitle">Technical writing, tutorials, and insights on software engineering</p>
  
  <div class="articles-list">
    {% if site.articles %}
      {% for article in site.articles %}
        <article class="article-card">
          <h2><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h2>
          <p class="article-meta">{{ article.date | date: "%B %d, %Y" }}</p>
          {% if article.summary %}
            <p class="article-excerpt">{{ article.summary }}</p>
          {% endif %}
          <a href="{{ article.url | relative_url }}" class="read-more">Read More →</a>
        </article>
      {% endfor %}
    {% else %}
      <p>No articles yet. Check back soon!</p>
    {% endif %}
  </div>
</section>

<style>
  .articles-section {
    padding: 2rem 0;
  }

  .articles-section .section-title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .articles-section .subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3rem;
  }

  .articles-list {
    max-width: 700px;
    margin: 0 auto;
  }

  .article-card {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid var(--accent);
    background: var(--surface);
    border-radius: 8px;
    transition: var(--transition);
  }

  .article-card:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(76, 201, 240, 0.1);
  }

  .article-card h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
  }

  .article-card h2 a {
    color: var(--text);
    text-decoration: none;
  }

  .article-card h2 a:hover {
    color: var(--accent);
  }

  .article-meta {
    font-size: 0.9rem;
    color: var(--muted);
    margin: 0 0 0.8rem 0;
  }

  .article-excerpt {
    color: var(--muted);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: var(--transition);
  }

  .read-more:hover {
    margin-left: 0.5rem;
  }
</style>
