## Node.js

JS 실행환경. 웹 브라우저 밖에서도 js 실행 가능
새폴더 생성 -> vscode로 열기
-> npm init -> package.json생성됨
-> index.js 생성하기
-> 터미널에 node index.js

**package.json**
scripts : 간단한 명령어 지정하는 곳

모듈 : 기능에 따라 js파일을 나눈것  
모듈시스템 : 모듈 생성,호출 등 모듈을 다루는 기능 제공
cjs와 esm
type: module설정을 해야 esm사용 가능. esm은 확장자까지 작성해줘야 함.
export default 는 { 중괄호 }없이 import가능'

라이브러리
날짜/수학/그래픽
npmjs 접속 -> randomcolor -> npm i randomcolor
-> package.json의 dependencies 및 node modules에 라이브러리 기록됨
package-lock.json : 설치된 라이브러리의 구체적인 정보
node_modules는 gitignore에 넣든지 해라..(무거움) -> npm i하면 됨

## react

컴포넌트 기반, 화면 업데이트 구현이 빠르고 좋음
선언형 프로그래밍-목적만 명시(js는 명령형)

critical randering path
: render tree -> layout -> painting
js가 dom을 수정하면 위의 과정이 다시 일어남. reflow/repaint가 오래걸림
=> 동시에 발생한 업데이트를 모아서 dom을 한번에 수정. -> react가 이 과정을 자동으로 해줌
원리 : **virtual dom**

### react로 개발하기

vite: 프론트엔드 개발 툴. react app생성을 위한 기본 설정 제공
powershell에서 했더니 실행정책때문에 막힘(Unauthorized) -> bash로 하자...
npm create vite@latest -> 이거 뷰 할때도 한건데...
public폴더 : 정적인 파일 보관. 폰트, 동영상, 이미지...

extension : eslint, prettier,

### 컴포넌트

html을 return 하는 js함수. 이름 첫글자는 무조건 **대문자**
react는 jsx 문법을 사용하기때문에 html을 return 할 수 있다.
& js값을 {중괄호}를 사용하여 html에 렌더링 할 수 있음
주의사항

1. 중괄호 내부에는 js표현식만 넣을 수 있다. (if/for문은 불가능)
2. 숫자, 문자열, 배열의 값만 렌더링 가능하며 boolean, 객체, null등은 렌더링 불가
3. 모든 태그는 닫혀있어야 함.
4. 최상위 태그는 무조건 1개만. 빈 태그로 묶어도 괜찮음

### css적용하기

- 인라인
- 스타일시트 생성 후 className="" 적용

### props

컴포넌트에 값을 전달. 객체로 전달됨.
스프레드 연산자를 통해 객체의 값을 일괄적으로 전달가능
구조분해 할당으로 값을 받아옴 -> 기본값 설정
props의 장점 : html요소, 다른 컴포넌트도 전달 가능

### 이벤트 핸들링

onClick={}
onMouseEnter={}
이벤트 객체
합성이벤트 : 브라우저마다 이벤트 객체가 약간씩 다름 -> 하나의 통일된 규격으로 이벤트를 포맷팅해줌 => 크로스 브라우징 문제에서 자유로워

### state

: 컴포넌트의 현재 상태를 보관하는 변수. state의 값에 따라 렌더링되는 UI가 결정된다. state값이 변하면 리렌더링 됨.
하나의 컴포넌트에 여러개의 state 지정 가능
state의 현재값, state의 값을 변경시키는 함수
useState(초기값) : state의 초기값 지정

리렌더링 조건
state변경시 / props변경시 / 부모컴포넌트가 리렌더링될경우

여러개 state를 하나로 관리해보자

useRef : Reference객체를 생성
컴포넌트가 리렌더링 되어도 초기화 되지 않음.

react hooks : 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용가능하도록 돕는 메서드
useState, useRef 둘 다 react hooks임

- hook은 반드시 함수 컴포넌트 내부에서만 호출되어야 한다.
- hook은 조건문이나 반복문에서 호출될 수 없다
- custom hook을 만들 수 있다. 함수 이름 앞에 use붙이면 됨. 커스텀훅은 src>hooks의 별도의 폴더에 저장해둠(일반)

스테이트 리프팅
: 데이터는 부모 -> 자식으로 흐름. 하나의 스테이트를 여러 컴포넌트에서 관리하게 될 경우 스테이트를 컴포넌트의 공통 부모에 위치

## 라이프사이클

Mount -> update -> unMount

- mount : 화면에 처음 렌더링되는 순간
- update : 컴포넌트가 리렌더링 되는 순간
- unMount : 컴포넌트가 화면에서 사라짐(렌더링에서 제외됨)

### useEffect

컴포넌트의 사이드이펙트 제어, 또는 생성
파라미터로 콜백함수와 배열을 넣음. 배열에 들어있는 state값이 바뀔때마다
