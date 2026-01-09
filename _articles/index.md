---
layout: page
title: Articles
description: Technical articles and notes
---

{% for article in site.articles %}
<div class="card">
  <h3><a href="{{ article.url }}">{{ article.title }}</a></h3>
  <p>{{ article.description }}</p>
</div>
{% endfor %}
