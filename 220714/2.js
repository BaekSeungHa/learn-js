//연도 반환
const date = new Date(); //현재 시간 정보를 가진 객체가 생성
console.log(date.getFullYear());

console.log(date.getMonth() + 1);



//month에 1을 더하는 이유는 0부터 시작하기때문에 +1을 해줘야한다

console.log(date.getDate());
//시
console.log(date.getHours());
console.log(date.getHours() % 12); //12시

//분
console.log(date.getMinutes());

//초
console.log(date.getSeconds());
//요일
const dayList = ["일", "월", "화", "수", "목", "금", "토"];

console.log(date.getDay());
 



//날짜 계산하기

//100일 계산기
const theDay = new Date(2022, 7-1, 14);
theDay.setDate(theDay.getDate() + 100);
console.log(theDay.toLocaleDateString());

const birth = new Date(2021, 7-1, 14);
const today = new Date();
console.log(today.getTime());