//제어문

//1. 조건에 따른 분기:if
//usage:
//if(조건식) {
//   조건식이 참일때 수행할코드
//    초건식이 참일때 수행할코드
//}
//var num = Number(window.prompt("숫자 입력"));
var num = 0;
if(num === 0) {
    console.log("zero!");
}else {
    console.log("not zero!");
}//if(num !== 0) 

//위 코드는 경우에 따라 불필요한 연산이 발생할 수 있습니다.
//이를 해결하기 위해 if else를 제공합니다.
