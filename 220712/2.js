//1. 표준 출력: 어떤 값을 모니터로 전송하는 개념
//1-1 대화 상자를 사용한 방법:
//window.alert("hello world!");
//1-2 개발자 도구의 콘솔을 사용;
console.log("hello, world");
//1-3. 웹 페이지 상에서 출력하는 방법;
//document.write("hello, world");

//연습 문제
var d = "홍길동";
var age = 20;
//위 변수를 사용하여 다음과 같이 출력해 보세요
//이름은: 홍길동, 나이: 20
console.log("이름: " + d + ", 나이:" + age);    

//템플릿 이터널 백틱을 사용한 문자열
//문자열 안에 표현식을 사용할 수 있습니다
//달러는 읽어 오겠다
console.log(`이름: ${d}, 나이: ${age}`);

//2.표준 입력: 키보드로부터 값을 입력 받는 개념

//2-1 HTML의 폼 객체를 사용
//함수 정의
function fn() {
    //HTMl 태그에 ID를 설정하면 그 객체는 전역으로 설정된다
    console.log(myname.value);
}

//2-2 window.prompt의 사용
var name = window.prompt("이름을 입력하세요.");
console.log(name);

//연습 문제: 사용자로부터 원의 반지름을 입력 받아
//그 넓이를 출력하는 프로그램을 구현해 보세요
//단, 정수나 실수만 입력된다고 가정하고 원주율은 3.14

var a = window.prompt("반지름을 입력하세요.");
//키보드로부터 입력 바은 모든 데이터는 문자열입니다
//따라서 이를 사용하여 수치 연산을 수행하려면 가급적
//숫자형으로 변환하여 사용할 것을 권장합니다.
var circle = ((Number(a) ** 2) *3.14);
console.log(circle);