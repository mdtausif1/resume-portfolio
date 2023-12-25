// You can use JavaScript to fetch and display GitHub projects dynamically
// For simplicity, you can use a static example here
document.getElementById('github-projects').innerHTML = `
  <a href="#" target="_blank">Project 1</a>
  <a href="#" target="_blank">Project 2</a>
  <a href="#" target="_blank">Project 3</a>
  <a href="#" target="_blank">Project 4</a>
  <a href="#" target="_blank">Project 5</a>
  <a href="#" target="_blank">Project 6</a>
`;
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("nav-open");
}