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