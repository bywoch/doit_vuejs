// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props

// `sibling-component` 전역 컴포넌트 등록
// `propsdata` 프롭스를 받아서 출력하는 컴포넌트
Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

// `child-component` 전역 컴포넌트 등록
// `propsdata` 프롭스를 받아서 출력하는 컴포넌트
Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

// 할일 #2
// data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
// 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.

// Vue 인스턴스 생성
var app = new Vue({
  el: '#app', // Vue 인스턴스를 마운트할 요소 선택자
  data: {
    message: 'Hello Vue! passed from Parent Component', // 부모 데이터
    anotherMessage: 'Hello Vue.js! passed from Parent Component' // 다른 부모 데이터
  }
});

/* 

컴포넌트를 전역으로 등록하고, 인스턴스를 생성하는 예제

- sibling-component 컴포넌트는 propsdata 프롭스를 받아서 해당 데이터를 출력
- child-component 컴포넌트도 마찬가지로 propsdata 프롭스를 받아서 해당 데이터를 출력
- app 인스턴스는 el 속성을 통해 마운트할 요소를 선택하고, data 속성을 통해 두 개의 부모 데이터를 정의합
이 부모 데이터는 각 컴포넌트의 propsdata 프롭스로 전달

*/
