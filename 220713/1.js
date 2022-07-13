//자료구조는 데이터의 값의 모임 또 데이터 간의 관계, 그리고 데이터에  적용할 수 있는 함수나 명령의 모음

//1.array(배열):배열 데이터의 추가된 순서가 유지되고 중복을 허용하는 자료 구조\

//배열 생성
const array = []; //비어있는 배열 생성
console.log(array);

const a2 = [1, 2, 3, 4];
//원소 또는 요소 : 자료구조 안의 값을 의미
console.log(a2); //추가된 순서가 유지

const a3 = [1, 1, 1, 1];
console.log(a3)//중복을 허용

//배열은 자바스크립트가 제공하는 모든 타입의 값을 저장할 수 있습니다.
const a4 = [10, 3.14, "Hello", true, [1, 2, 3]];
console.log(a4);

//인덱싱: 인덱스를 사용하여 원소를 참조하는 문법
//            0 1 2 3 4 5 6 7  <--인덱스(index)
const arr = [11, 22, 33, 44, 55, 66, 77, 88];

console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr.flat(-1));
console.log(arr.flat(-1)); //console.log(arr[-1]);

//주의! 존재하지 않는 원소에 대하여 인덱싱을 수행하면 
//undefined가 반환 됩니다.

//슬라이싱 일부 연속된 구간을 선택하는 문법

const b = [11, 22, 33, 4, 55, 66, 77, 88]

//usage: 배열명.slice(시작값, 끝값); -> 시작값은 포함되나 
//끝 값은 포함되지 않는 반개구간입니다.
console.log(b.slice(1, 5));

//마지막 원소를 포함할 경우, 마지막 원소의 인덱스 보다
//큰 값을 넣어주시면 됨

//배열 전체에 대하여 슬라이싱을 한다고 가정했을때


//만약 마지막 원소가 포함된 경우라면, 마지막 인덱스를 생략할 수 있습니다
 

//슬라이싱을 하면 새로운 배열이 반환됩니다.

//const c = a.slice();
//c[0] = 0;
//console.log(a);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const fruits = ["apple", "banana", "cherry", "durian"];

//1. 조건 기반의 for
for(let idx = 0; idx < fruits.length; idx++) {
    console.log(fruits[idx]);
}
//2. 원소 기반의 for
for (const fname of fruits) {
    console.log(fname);
}

//3. forEach
function myFunc(item, //원소가 전달됩니다.
                idx,  //원소의 인덱스가 전달됩니다.
                array) {//배열이 전달됩니다.
    console.log(item);
}
fruits.forEach(
    myFunc
)

//JS에서는 이름이 없는 함수를 만들 수 있습니다.
//usage: function([매개변수[...]]){}
fruits.forEach(function(item, idx, arr) {
    console.log(item);
});


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//원소의 갱신(update)
//const fruits = ["apple", "banana", "cherry", "durian"];
console.log(fruits);

//usage: 배열명[인덱스] = 값;
fruits[0] = "사과"; //apple이 사과로 변경됨
console.log(fruits)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//원소의 추가 1. 배열의 끝에 추가
fruits.push("포도");
console.log(fruits);

//앞에서 추가하는 경우
fruits.unshift("오랜지");
console.log(fruits);

//원소의 삭제: 배열의 끝에서 삭제
let item = fruits.pop(); //포도 삭제
console.log(item);
console.log(fruits);    

//배열의 앞에서 삭제
item = fruits.shift(); //오랜지 삭제
console.log(item);
console.log(fruits);   

//정력
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]; 
console.log(numbers);

numbers.sort(function(a, b) {
    return a-b;  //오름차순
});
numbers.sort(function(a, b) {
    return b-a;  //내림차순
});
console.log(numbers);