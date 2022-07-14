
// 내장 객체: 자바스크립트가 기본으로 제공하는 객체

// 2. Number: 숫자 객체

// 1. toFixed([자릿수]): 소수점 이하를 지정한 자릿수로 
// 변환한 다음 문자열로 반환합니다.
console.log((123.567).toFixed(1));
console.log((123.567).toFixed(0));

// 전달된 값의 소수점보다 더 많은 자릿수를 입력하면
// 빈 자리를 0으로 채웁니다.
console.log((2.4).toFixed(3));  // 2.400

// 2. toPrecision([정밀도]): 숫자를 지정한 자릿수의 정밀도로
// 변환한 다음 문자열로 반환합니다.
console.log((0.7777777).toPrecision(2));
console.log((234.567).toPrecision(3));

// 자릿수가 늘어나면 빈 자리를 0으로 채웁니다.
console.log((10).toPrecision(4));

// ---------------------------------------------------
// 3. String: 문자가 연속되어 나열된 것
// 각 원소가 문자로 되어 있는 일종의 배열
console.log("hello".length);  // 문자의 갯수

// 앞과 뒤의 불필요한 공백 제거
console.log("|" + "       hello      ".trim() + "|");

// 문자열에도 인덱스가 존재합니다.
console.log("hello"[0]);
console.log("0123456789".slice(0,3));
console.log("0123456789".slice(0));

// 대소문자 변환
console.log("HeLLo".toLowerCase());
console.log("HeLLo".toUpperCase());

// 문자열 연결
console.log("hello" + "javascipt");
console.log("hello" + " javascipt");

console.log("apple" + " " + "banana" + " " + "cherry" + " "  + "durian")
console.log("apple".concat(" ", "banana", " ", "cherry", " ", "durian"));

// 문자열 쪼개기
// 192.168.0.1
console.log("192.168.0.1".split("."));
console.log("192.168.0.1".split(".", 2)); // 2개만 분리

// 문자열 검색: indexOf(검색할문자열)
// 검색할 문자열의 시작 인덱스를 반환
//           012345678
console.log("hello.pdf".indexOf(".pdf"));
console.log("hello.pdx".indexOf(".pdf"));  // 실패 시, -1을 반환

// 문자열 포함: includes(검색할문자열)
// 해당 문자열이 포함된 경우, 참을 반환하고 포함되지 않은 경우
// 거짓을 반환합니다. 
console.log("hello.pdf".includes(".pdf"));
console.log("hello.pdx".includes(".pdf")); 

// 어떤 문자열이 특정 문자열로 시작 또는 끝나는지를 확인
// startsWith, endsWith
console.log("https://hello.com".startsWith("https"));
console.log("http://hello.com".startsWith("https"));

console.log("hello.pdf.txt".endsWith(".pdf"));
console.log("hello.pdf".endsWith(".pdf"));

// -------------------------------------------------------
// Date: 날짜 객체

// 연도 반환
const date = new Date();  // 현재 시간 정보를 가진 객체가 생성
// console.log(date.getYear()); // Y2K 문제!!!
console.log(date.getFullYear());

// 월 반환
console.log(date.getMonth() + 1); // 0부터 시작합니다.

// 일 반환
console.log(date.getDate());

// 시
console.log(date.getHours()); // 24시(0~23)
console.log(date.getHours() % 12); // 12시

// 분
console.log(date.getMinutes());

// 초
console.log(date.getSeconds());

// 요일
const dayList = ["일","월","화","수","목","금","토"];

// 숫자로 반환하며 시작은 일요일이고 그 값은 0입니다.
console.log(date.getDay());
console.log(dayList[date.getDay()]);

// 전체 날짜 출력하기
console.log(date.toDateString());
console.log(date.toLocaleDateString());

// 전체 시간 출력하기
console.log(date.toLocaleTimeString());

// -----------------------------------------------------
// 날짜 계산하기

// 100일 계산기
const theDay = new Date(2022, 7-1, 14);
theDay.setDate(theDay.getDate() + 100);
console.log(theDay.toLocaleDateString());

// 날짜의 차이 계산
const birth = new Date(2021, 7-1, 14);
const today = new Date();
console.log(today.getTime()); // epoch: ms로 반환됩니다.

// epoch: 1970년 1월 1일 00:00:00 협정 세계시(UTC) 부터의
// 경과 시간을 초로 환산하여 정수로 나타낸 것이다.
diff = today.getTime() - birth.getTime();
console.log(Math.ceil(diff / (1000 * 60 * 60 * 24)));




















  