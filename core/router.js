import { renderPostDetail } from '../components/PostDetail.js';
import { renderDesignPage } from '../pages/DesignPage.js';
import { renderTechPage } from '../pages/TechPage.js';
import { renderHomePage } from '../pages/MainPage.js';

export function navigateTo(url) {
  window.history.pushState({}, '', url);
  handleRoute()
}
export function handleRoute() {
  const path = window.location.pathname;
  const appDiv = document.getElementById('app');
  console.log('Navigated to:', path);
  while (appDiv.firstChild) {
    appDiv.removeChild(appDiv.firstChild);
  }
  if (path.startsWith('/post/')) {
    const postId = parseInt(path.split('/').pop());
    console.log('Post ID:', postId);
    if (postId) {
      renderPostDetail(postId);
    }
  } else if (path === '/design') {
    renderDesignPage();
  } else if (path === '/tech') {
    renderTechPage();
  } else {
    renderHomePage();
  }
}