async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  el.innerHTML = await res.text();
}

loadComponent("header", "/_includes/header.html");
loadComponent("footer", "/_includes/footer.html");
