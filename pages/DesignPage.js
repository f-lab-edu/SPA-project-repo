import { renderHeader } from '../components/Navbar.js'; 
export function renderDesignPage() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = renderHeader() + '<h1>Design Page</h1>';
}