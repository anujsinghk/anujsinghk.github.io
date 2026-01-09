---
layout: page
title: Projects
description: Selected software engineering projects
---

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.description }}
{% endfor %}
