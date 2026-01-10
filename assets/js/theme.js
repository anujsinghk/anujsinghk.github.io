/**
 * Dark Mode Toggle & Theme Manager
 * Detects system preference, time of day, and provides manual toggle
 */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'theme-preference';
    this.init();
  }

  init() {
    // Check for saved preference, system preference, or time of day
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isNight = this.isNightTime();

    let theme = 'dark'; // default

    if (savedTheme) {
      theme = savedTheme;
    } else if (prefersDark || isNight) {
      theme = 'dark';
    } else {
      theme = 'light';
    }

    this.setTheme(theme);
    this.setupToggle();
    this.setupSystemPreferenceListener();
  }

  isNightTime() {
    const hour = new Date().getHours();
    return hour >= 20 || hour < 6; // 8 PM to 6 AM
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleIcon(theme);
  }

  setupToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    });
  }

  setupSystemPreferenceListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  updateToggleIcon(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
  });
} else {
  new ThemeManager();
}
