---
layout: page
title: Projects
description: Selected engineering projects
---

{% for project in site.projects %}
<div class="card">
  <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
  <p class="meta">{{ project.tech }}</p>
  <p>{{ project.description }}</p>
</div>
{% endfor %}
