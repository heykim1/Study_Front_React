# 자바스크립트

웹의 동적 기능 개발(웹 사이트 내부의 동작)  
브라우저의 자바스크립트 엔진에서 실행됨

`<script>`태그를 사용함  
문서 내부에서 위치 제약 없음(보통 `</body>`태그의 바로 위에 넣기)
주석 : `//`, `/**/`

## 기초

### 변수

- var : 재선언, 재할당 o
- let : 재선언x, 재할당 o
- const : 재선언, 재할당 x. **상수**

undefined: 변수에 값 대입 x  
변수이름은 $또는 \_만 사용 가능. 예약어 사용불가. 숫자로 시작할 수 없다.

형변환

- 묵시적(암시적) : 숫자+문자 -> 문자  
  == 비교는 묵시적 형변환 사용(타입이 달라도 비교)
- 명시적 : 내장함수 사용(Number, String, Boolean)

`??` : null병합연산자. null이나 undefined가 아닌 값을 찾아내서 반환.  
A ?? B에서 A가 null이 아니면 A반환, null이면 B반환  
`typeof` : 변수의 타입을 **문자**로 알려줌

조건문 : if ~ else if ~ else / switch ~ case: break ~ default  
반복문 : for continue; break; / while / do ~ while

### 함수

: function( ){ } 형태. _함수이름_()으로 호출. js는 함수를 변수에 담을 수 있다.

호이스팅 : 호출 전 선언이 미리 되게 하기  
함수표현식&익명함수&화살표함수 :  
콜백함수 : 다른 함수에 인자로 전달된 함수. 인자로 전달하는 순간에 인자로 function이나 화살표 함수를 작성할 수 도 있음.

스코프 : 전역 / 지역  
변수&함수 호출 범위는 선언된 { } 내부

### 객체

let 객체 = {} -> 생성
let 객체 = {
객체는 프로퍼티(속성)를 가지며 프로퍼티는 key : value로 구성됨
name : "",
age : 22.
hobby:
}
프로퍼티 접근방법 : 점 / 괄호

- 점 : 프로퍼티 이름으로 접근. 나는 점이 더 좋은디..
- 괄호 : 변수를 통한 동적 접근 가능. 프로퍼티 이름에 특수문자,공백 있을경우 괄호 접근

없는 프로퍼티에 접근 시 undefined 나타남.  
접근방법을 통해 프로퍼티를 추가하거나 수정할 수 있으며, delete를 통해 삭제가능
key **in** object : 객체 내부에 특정 프로퍼티가 존재하는지 확인 가능  
메서드 : 값이 함수인 프로퍼티

### 배열

: js는 배열에 어떤 타입이든 저장할 수 있다.

### falsy

false : undefined, null, 0, -0, NaN, "", 0n
-> 사용법 : if문을 통한 오류방지용.

```
let person;
printName(person);

function printName(person) {
  if (!person) {
    console.log("person값이 없음");
    return;
  }
  console.log(person.name);
}
```

### 단락평가

논리연산자에서 첫번째 피연산자가 결과를 확정시킬경우 뒤의 연산자는 검증안함

### 구조분해할당

1. 배열 : 요소 순서에 따라 let[a,b,c,d] 이름 지정. 없는거 지정할 수 있음 & 있는거 지정 안할 수 도 있음.

2. 객체 : let{키값1, 키2, 키3, 키4} = object
   기본값 지정 가능, 변수이름 변경 원하면 {키 : 새 변수명}하면 됨.
   함수에서 파라미터에 구조분해 할당 후 인자로 객체를 넘길 수 있음.

### ... 연산자

- spread연산자. 펼처넣는 역할 함. 앞에 쓰면 spread
- rest연산자. 나머지 통틀어서 배열로 묶음. rest뒤에는 추가적인 매개변수를 넣을 수 없다.

### 원시타입 / 객체타입

원시타입 : 불변값. 실제 메모리의 값이 변하지 않음. 변수가 가리키는 곳이 변한 것.  
객체타입 : 가변값. 참조값을 통해 저장되며 메모리상의 값 변화. 의도치않은 값 변경 주의! -> 깊은 복사를 하자  
**깊은 복사** : 새로운 객체를 만들어서 값을 복사.
깊은복사 값을 비교할 때 JSON.stringify(객체) === 로 비교

### 순회하기

`for ~ of/in`사용하기 : 배열/객체의 각 요소를 순회하며 새 변수에 담음 -> 작업진행

```
for(let item of arr){
    item.name
}
```

`Object.keys`사용하기 : 객체의 키만 모아서 배열로 반환  
`Object.values`사용하기 : 객체의 값만 모아서 배열로 반환

## 메서드

### 요소조작

1. push(a,b,c,d) : 배열 맨 뒤에 새로운 요소 추가. 변화된 배열 길이 반환
2. pop() : 배열 맨 뒤의 요소를 제거하고 반환
3. shift : 배열의 맨 앞에 있는 요소를 제거하고 반환
4. unshift(a,b,c,d) : 배열의 맨 앞에 새로운 요소 추가. 변화된 배열 길이 반환
5. slice(a,b) : 배열의 특정 범위를 새로운 배열로 반환(a이상 b미만)
6. concat : 두 개의 배열을 이어붙여서 새 배열 반환

### 순회탐색

1. forEach : 모든 요소 순회&각 요소에 동작 수행. 반환값 X. break, continue사용불가

```
배열.forEach((element, index, array) => {})
(순회중인 요소, 순회중인 인덱스, 원본배열)로 여러 작업 수행
```

2. includes : 배열에 특정 요소가 있는지 확인. 있으면 true/없으면 false 반환

```
.includes(searchElement, fromIndex)
(찾는 값, 검색이 시작될 인덱스(음수도 가능!))
```

3. indexOf : 특정 요소가 존재하는 위치(없으면 -1) 반환

```
.indexOf(searchElement, fromIndex)
```

4. findIndex : 배열의 처음부터 탐색하여 조건에 맞는 첫 번째 요소의 인덱스 반환(없으면 -1). 파라미터는 forEach와 동일

```
.findIndex( (item) => item.id === 999 );
화살표함수를 통해 item을 인자로 받아 검색 조건 설정
```

5. find : 배열의 처음부터 탐색하여 조건에 맞는 첫 번째 요소 반환(없으면 undefined)

### 배열변형

1. filter : 기존 배열에서 조건을 만족하는 요소만 필터링하여 새로운 배열로 반환
2. map : 모든 요소 순회&각 요소에 동작 수행 -> 결과값을 새 배열로 반환
3. sort : 배열 정렬. 기본 = 문자열 기준 오름차순. 숫자정렬은 조건작성필요

```
nums.sort((a, b) => b-a); //내림차순
```

4. toSorted : 정렬된 새로운 배열 반환
5. join : 배열의 모든 요소를 하나의 문자열로 합침. 파라미터로 구분자 전달

### 시간

```
// 객체 생성하기
let now = new Date();
let date = new Date(1996, 3, 2, 11, 00, 01);

// 타임 스탬프
let ts1 = date.getTime();
let date4 = new Date(ts1);

// 단위별 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 시간 수정
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 포맷
console.log(date1.toDateString());
console.log(date1.toLocaleString());

// 코드 실행시간
new Date().getMilliseconds();
```

## 비동기 작업

: 자바스크립트는 싱글스레드. => 비동기 작업은 브라우저(Web APIs)에서 수행

### 동기

작업을 순서대로 하나씩 실행

### 비동기

setTimeout : 비동기 작업 메서드. 정해진 시간두고 실행
콜백지옥 : 비동기 작업의 결과에 따라 다른 작업을 수행할 때, 비동기함수의 매개변수로 함수 객체 사용 -> 함수 내부에서 작업의 결과를 콜백 함수에 인자로 넘김 -> 코드가 복잡하고 가독성 저하 = **콜백지옥**

### Promise

: 비동기 작업을 위한 js내장 객체. 비동기작업을 감싸줌. 콜백지옥 탈출

```
 new Promise((resolve, reject) => {
  .. 여러가지 비동기 작업들..
  if(true) { resolve(); } else { reject(); }
 })
```

- 상태관리 : 대기-성공-실패 3가지 상태로 관리.
- **then, catch, finally**: 비동기 작업의 성공/실패 결과를 받아 새로운 promise반환. finally는 결과상관없이 무조건 실행됨
- 체이닝

async : 어떤 함수를 비동기 함수로 만들어주는 키워드. 함수 앞에 붙여서 함수가 promise를 반환하도록 변환
await : async함수 내부에서만 사용 가능. 비동기 함수가 다 처리될때까지 기다렸다 결과 반환
-> 비동기 코드를 동기 코드처럼 쉽게 작성할 수 있게 해줌
