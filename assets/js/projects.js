/**
 * Dynamic Projects Renderer
 * Fetches projects from assets/data/projects.json and renders them dynamically
 */

async function loadProjects() {
  try {
    const response = await fetch('/assets/data/projects.json');
    const projects = await response.json();
    renderProjects(projects);
    initVanillaTilt();
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects.map((project) => `
    <div class="project-card bento-${project.size}" data-tilt>
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='/assets/images/placeholder.jpg'">
      </div>
      <div class="card-content">
        <h3><a href="${project.link}">${project.title}</a></h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <a href="${project.link}" class="card-link">View Project →</a>
      </div>
    </div>
  `).join('');

  // Initialize Vanilla Tilt after rendering
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.project-card[data-tilt]'), {
      max: 8,
      speed: 400,
      scale: 1.02,
      transition: true
    });
  }

  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProjects);
} else {
  loadProjects();
}
