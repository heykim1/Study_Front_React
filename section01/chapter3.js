console.log("hello")
// console.log("hello var")
// //변수
// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// //상수는 선언과 동시에 초기화
// const birth = "뭔데이"

//Type
//문자열은 ""또는 ''로 감싸야 함
//문자열 + 는 concat과 같음
//null(의도적비할당)과 undefined(비의도적비할당) 구분하기
// const arr = [1, 2, 3, 2, 4];

// console.log(arr.includes(2, 2)); // true
// console.log("지나갑니다~~")
// console.log(arr.includes(2, 4)); // false

// let area = getArea(10,20);
// console.log(area)

// function getArea(width, height){
//     function another(){
//         console.log("another");
//     }
//     another();
//     let area = width*height;
//     return area;
// }

// let varA = (value) =>{
//     console.log(value);
//     return value + 1;
// };
// console.log(varA(10))

// function main(value){
//     value();
// }
// main(()=>{
//     console.log("콜백함수를 정의해놓고 인자로 함수를 넣을거야")
// })

// function repeat(count, callback){
//     for(let idx=1; idx<= count; idx++){
//         callback(idx);
//     }
// }

// repeat(2,(idx)=>{
//     console.log(idx)
//     //위의 원본함수를 보시면 callback의 인자로 idx가 넘어가쥬? 
//     //idx를 받는건 확정, callback으로 어떤함수(기능)을 쓸지 지금 지정했음.
// })


// let person = {
//     name: "kim",
//     age: 30,
//     hobby: "walk",
// }

// let name = person.name;
// let age = person["age"];
// let vars = "hobby";
// let hobby = person[vars];
// person.dislike = "baseball";

// console.log(person)

// const person = {
//     name: "",
//     hi(){
//         console.log("hi")
//     }
// }

// person.hi();

// function printName(person){
//     if(!person){
//         console.log("no data");
//         return;
//     }
//     console.log(person);
// }
// let person = {}
// printName(person);

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2)

function func(one, two, ...ds){
    console.log(one)
    console.log(two)
    console.log(ds)
}

func(...arr2); //꼭 펼쳐주세