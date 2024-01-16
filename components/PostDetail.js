import { state } from '../index.js';
import { renderHeader } from './Navbar.js'; 
export function renderPostDetail(postId) {
  const post = state.posts.find(p => p.id === postId);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = renderHeader() + `
        <h1>${post.title}</h1>
        <p>${post.content}</p>
    `;
}