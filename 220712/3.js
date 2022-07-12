//제어문

//1. 조건에 따른 분기:if
//usage:
//if(조건식) {
//   조건식이 참일때 수행할코드
//    초건식이 참일때 수행할코드
//}
//var num = Number(window.prompt("숫자 입력"));

//0인지 양수인지 음수인지를 판별하는 코드를 생각해 봅시다.
var num = 0;
if(num === 0) {
    console.log("zero!");
}else {
    //분기문을 중첩할 수 있습니다
    if(num > 0)
        console.log('positive!');

    else //if(num < 0)
        console.log('negative!');
}//if(num !== 0) 
//이전의 코드는 중첩으로 인해 가독성이 떨어진다는
//단점이 있습니다. 이를 해결하기 위해 자바스크립트는
//else if를 제공합니다

num = 0;
if(num > 0) {
    console.log("positive!");
}
else if(num < 0) {
    console.log("negative");
}
else {
    console.log("zero!");
}

//연습문제 사용자로부터 점수를 입력받아 
//등급을 출력하는 프로그램을 구현해 보세요.
//90점이상 A
//80점이상 B
//70 C
// 60 D
//나머지 f
var num = Number(window.prompt("숫자 입력"));
if(num > 100 && 100 < num) {
    console.log("잘못 입력하셨습니다");
}
else if(num >= 90) {
    console.log("A");
}
else if(num >= 80) {
    console.log("B");
}
else if(num >= 70) {
    console.log("B");
}
else if(num >= 60) {
    console.log("B");
}
else {
    console.log("F");
}

//논리 연산자: 이항 연산자로 피연산자를 논리형을 사용하는연산자
//1. AND 연산자: 이항 연산자로 피연산자가 모두 참인 경우에만 참을 반환
//console.log(true && true); ture 나머지는 다 false
console.log(true || true);//ture
console.log(true || false);//false
console.log(false || true);//false
console.log(false || false);//false

//2. OR 연산자 하나의 피연산자가 참이면 참을 반환하는 연산자
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false

//3 NOT 단항 연산자로 피연산자의 값을 반전
console.log(!true); //false
console.log(!false); //true


