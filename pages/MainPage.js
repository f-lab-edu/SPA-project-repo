import { renderHeader } from '../components/Navbar.js';
import { renderPostList } from '../components/PostList.js';
// import { renderPostList } from '../components/PostList.js';
export function renderHomePage() {
  const appDiv = document.getElementById('app');
  const navElement = document.createElement('div');
  navElement.id = 'nav';
  appDiv.appendChild(navElement);
  navElement.innerHTML = renderHeader();
  const postElement = document.createElement('div');
  appDiv.appendChild(postElement);
  postElement.id = 'post-list';
  renderPostList();
}