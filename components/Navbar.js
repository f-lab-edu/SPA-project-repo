export function renderHeader() {
  const menuItems = [
    { id: 'design', href: 'design', text: '디자인' },
    { id: 'tech', href: 'tech', text: '개발' },
  ];

  const menuElements = menuItems.map(item => `
      <li>
          <div class="menu_item" id="/${item.id}"><a href="/${item.href}">${item.text}</a></div>
      </li>
  `).join('');

  return `
      <header>
          <nav class="navbar">
              <div class="navbar__logo">
                  <a href="/" aria-label="토스 기술 블로그, 토스테크">
                      <img src="../images/toss.svg" width="100px" height="30px" alt="" />
                  </a>
              </div>
              <div class="navbar__menu">
                  <ul class="menu_list">
                      ${menuElements}
                      <li><button type="button" aria-disabled="false">채용 바로가기</button></li>
                  </ul>
              </div>
          </nav>
      </header>
  `;
}