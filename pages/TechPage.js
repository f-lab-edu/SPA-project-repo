import { renderHeader } from '../components/Navbar.js'; 
export function renderTechPage() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = renderHeader() + '<h1>Tech Page</h1>';
}