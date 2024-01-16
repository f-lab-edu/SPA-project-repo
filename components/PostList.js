import { state } from '../index.js';

export function renderPostList() {
  const postDiv = document.getElementById('post-list');
  console.log(postDiv);

  // 포스트 목록 렌더링
  state.posts.forEach(post => {
    const postElement = document.createElement('div');
    const postLink = document.createElement('a');
    const postContent = document.createElement('p')
    postLink.href = `/post/${post.id}`;
    postLink.textContent = post.title;
    postContent.textContent = post.content;
    postElement.appendChild(postLink);
    postElement.appendChild(postContent);
    postDiv.appendChild(postElement);
  });
}