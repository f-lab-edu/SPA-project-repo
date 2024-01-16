import { navigateTo, handleRoute } from './core/router.js';
export const state = {
  currentRoute: window.location.pathname,
  posts: [
      { id: 1, title: '달리는 기차의 바퀴 교체하기 1.Planning', content: '이미 운영 중인 제품을 전반적으로 다시 만들거나 리팩토링 하는 경험을 해볼 수 있는 기회는 흔치 않은데요.' },
      { id: 2, title: '브라우저용 번들링 플러그인, 직접 만들었어요', content: '프론트엔드 번들링 도구를 사용하는 것을 넘어 직접 플러그인을 만들어 본 과정을 소개해요.' },
      { id: 3, title: '프론트엔드 로깅 신경 안 쓰기', content: '론트엔드 개발자라면 한 번쯤 고민해봤을 클라이언트 로깅 개선 과정을 공유합니다.' },
      { id: 4, title: 'Reactor Netty Memory Leak 이슈 탐방기', content: 'Spring Cloud Gateway와 Spring WebClient를 이용하면서 발생한 Memory Leak 이슈의 발생 원인과 해결 과정을 소개합니다.' },
      { id: 5, title: '인자가 많은 메서드는 왜 나쁠까?', content: '메서드를 함께 리팩토링 하면서 코드 사용자 입장에서 코드 복잡성을 관리하는 방법을 알아봅니다.' },
      { id: 6, title: 'Feign 코드 분석과 서버 성능 개선', content: 'Feign과 다중 스레드를 사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을 공유해요.' },
      { id: 7, title: 'null 리턴은 왜 나쁠까?', content: ' 코드 복잡성 관리 측면에서 의미를 축약한 표현의 문제와 해결 방법을 예제로 알아봐요.' },
  ],
};
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'A' && target.getAttribute('href')) {
      event.preventDefault();
      navigateTo(target.getAttribute('href'));
  }
});

window.addEventListener('popstate', handleRoute);

handleRoute();