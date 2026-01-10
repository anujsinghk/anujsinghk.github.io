# 📊 Projects Data Format & Examples

## JSON Structure

Each project must follow this structure in `assets/data/projects.json`:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "description": "Brief description of the project",
  "tech": ["Technology 1", "Technology 2", "Technology 3"],
  "link": "/projects/project-slug/",
  "size": "large|medium|small",
  "image": "/assets/images/project-image.jpg"
}
```

---

## Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (lowercase, no spaces) |
| `title` | string | ✅ | Project name (max 50 chars) |
| `description` | string | ✅ | Brief overview (max 150 chars) |
| `tech` | array | ✅ | Technologies used (3-5 tags) |
| `link` | string | ✅ | URL to full project page |
| `size` | string | ✅ | Grid size: `large`, `medium`, or `small` |
| `image` | string | ✅ | Path to project image |

---

## Grid Sizes Explained

### Large (2×2)
- **Best for**: Featured projects, showcase pieces
- **Grid Position**: 2 columns × 2 rows
- **Aspect Ratio**: Square
- **Content**: Larger image, full description

```json
{
  "id": "featured-project",
  "title": "Major Achievement",
  "description": "This is a flagship project that deserves prominent display.",
  "size": "large"
}
```

### Medium (1×2)
- **Best for**: Important projects
- **Grid Position**: 1 column × 2 rows
- **Aspect Ratio**: Portrait
- **Content**: Medium image, standard description

```json
{
  "id": "important-project",
  "title": "Key Project",
  "description": "Important work that showcases skills.",
  "size": "medium"
}
```

### Small (1×1)
- **Best for**: Quick wins, smaller projects
- **Grid Position**: 1 column × 1 row
- **Aspect Ratio**: Square (small)
- **Content**: Small image, brief description

```json
{
  "id": "quick-project",
  "title": "Small Project",
  "description": "Quick proof of concept.",
  "size": "small"
}
```

---

## Complete Examples

### Example 1: Full-Stack Project (Large)

```json
{
  "id": "ecommerce-platform",
  "title": "E-Commerce Platform",
  "description": "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Handles 100K+ daily transactions.",
  "tech": ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
  "link": "/projects/ecommerce-platform/",
  "size": "large",
  "image": "/assets/images/ecommerce.jpg"
}
```

### Example 2: Mobile App (Medium)

```json
{
  "id": "fitness-tracker-app",
  "title": "Fitness Tracker",
  "description": "Cross-platform mobile app with real-time workout tracking, social features, and ML-powered recommendations.",
  "tech": ["React Native", "Firebase", "TensorFlow"],
  "link": "/projects/fitness-app/",
  "size": "medium",
  "image": "/assets/images/fitness-app.jpg"
}
```

### Example 3: Utility Tool (Small)

```json
{
  "id": "markdown-converter",
  "title": "Markdown Converter",
  "description": "Fast, zero-dependency markdown to HTML converter with syntax highlighting.",
  "tech": ["JavaScript", "RegExp"],
  "link": "/projects/md-converter/",
  "size": "small",
  "image": "/assets/images/converter.jpg"
}
```

### Example 4: Research Project (Large)

```json
{
  "id": "nlp-sentiment-analysis",
  "title": "NLP Sentiment Analysis Engine",
  "description": "Production-grade sentiment analyzer using transformers, achieving 96% accuracy on benchmark datasets. Supports 12 languages.",
  "tech": ["Python", "PyTorch", "Hugging Face", "FastAPI"],
  "link": "/projects/nlp-sentiment/",
  "size": "large",
  "image": "/assets/images/nlp-project.jpg"
}
```

---

## Best Practices

### 1. Titles
- ✅ **Good**: "Real-time Chat Application", "ML-Powered Recommender"
- ❌ **Bad**: "Project 1", "Cool Stuff", "Thing I Made"

### 2. Descriptions
- ✅ **Good**: Action-oriented, specific outcomes
  - "Reduced load time by 60% using async rendering"
  - "Handled 1M+ requests/day with 99.9% uptime"
- ❌ **Bad**: Vague, no metrics
  - "Made a website", "Did some stuff"

### 3. Technologies
- ✅ **Good**: 3-5 main tech used, ordered by importance
- ❌ **Bad**: 10+ techs, including everything you touched
- Include: Main framework, backend, database, tools
- Exclude: npm, git, basic libraries

### 4. Images
- **Size**: Min 400×300px, recommended 800×600px
- **Format**: JPG (smaller) or PNG (transparent)
- **Optimization**: Compress before uploading
- **Fallback**: Will show placeholder if missing
- **Naming**: `project-slug.jpg` (lowercase, hyphens)

### 5. Links
- Use consistent slug format: `/projects/project-slug/`
- Must match URL path on your site
- Can be full external URL if hosted elsewhere

### 6. Organization
- **Order**: Most recent/important projects first
- **Balance**: Mix of large/medium/small for visual interest
- **Variety**: Different types: web, mobile, research, tools
- **Update**: Keep descriptions fresh and recent

---

## Grid Layout Examples

### Balanced Layout (6 projects)
```
[Large   ][Medium  ][Small]
[        ][        ][Small]
[Medium  ][Medium  ][Large ]
[        ][        ][      ]
```

Size distribution: 2 large, 2 medium, 2 small

### Showcase Layout (5 projects)
```
[Large        ][Medium][Small]
[             ][      ][Small]
[Large        ][Large ]
[             ][      ]
```

Size distribution: 3 large, 1 medium, 1 small

### Balanced Portfolio (8 projects)
```
[Med][Med][Med]
[   ][   ][   ]
[Small][Small][Small]
[Lrg       ][Lrg    ]
[          ][       ]
```

---

## Image Recommendations

### Screenshot-Based
- Product screenshots
- UI/UX mockups
- Dashboard displays

### Diagram-Based
- Architecture diagrams
- Flow charts
- System designs

### Logo/Icon-Based
- Minimal project branding
- Technology icons overlay
- Simple geometric designs

### Photo-Based
- Team photos
- Event coverage
- Before/after comparisons

---

## Common Mistakes to Avoid

❌ **Missing image**: Card will show placeholder
- **Fix**: Add image to `assets/images/`, update JSON path

❌ **Wrong grid size**: Layout breaks
- **Fix**: Use only `"large"`, `"medium"`, `"small"`

❌ **Broken link**: Link goes nowhere
- **Fix**: Verify `/projects/project-slug/` path exists

❌ **Too many techs**: Cluttered display
- **Fix**: Limit to 5 most important technologies

❌ **Vague description**: Doesn't impress
- **Fix**: Add metrics, outcomes, impact

---

## Template for Quick Copy-Paste

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "What the project does and why it matters.",
  "tech": ["Tech1", "Tech2", "Tech3"],
  "link": "/projects/project-slug/",
  "size": "medium",
  "image": "/assets/images/project.jpg"
}
```

---

## Current Example Projects

Your `projects.json` includes 6 example projects:
1. **Scalable Event Pipeline** (large) - Data engineering
2. **AI-Powered Assistant** (medium) - ML/AI
3. **Real-time Dashboard** (medium) - Frontend
4. **Microservices Platform** (large) - DevOps/Infrastructure
5. **Mobile App** (small) - Mobile development
6. **Security Framework** (small) - Security/Cryptography

**Next step**: Replace with your actual projects!

---

## Validation Checklist

Before pushing changes, verify:

- [ ] All `id` values are unique
- [ ] All `image` paths exist in `assets/images/`
- [ ] All `link` paths are valid URLs
- [ ] All `size` values are valid: `large|medium|small`
- [ ] All `tech` arrays have 3-5 items
- [ ] All titles are under 50 characters
- [ ] All descriptions are under 150 characters
- [ ] No syntax errors (valid JSON)

---

**Happy updating! Your portfolio now has professional project showcase! 🎉**
