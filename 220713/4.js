//객체
//자바스크립트에서 모든 것은 객체이다!
//객체 지향 프로그래밍을 이해하기 위해 학사 관리 프로그램을 생각해보자!
var nam = "daniel";
var kor = 10;
var eng = 20;
var math = 30;
var tot = kor + eng + math;
var avg = tot / 3;
console.log(nam, tot, avg)
//1명이 더 추가 되었다고 가정합니다.
nam = "daniel";
kor = 20;
eng = 30;
math = 40;
tot = kor + eng+ math;
avg = tot / 3;
console.log(nam, tot, avg)

//이전의 코드는 변수를 과목의 총점과 평균을 계산하는 코드가
//중복되고 수식이 존재하여 가독성이 떨어진다는 단점이 있습니다.
//사라진다는 문제가 있습니다
//개별적으로 변수를 도입하도록 합니다.
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
var nam1 = "daniel";
var kor1 = 10;
var eng1 = 20;
var math1 = 30;
var tot1 = total(kor1, eng1, math1);
var avg1 = average(tot1, 3);
console.log(nam1, tot1, avg1)


var nam2 = "daniel";
var kor2 = 20;
var eng2 = 30;
var math2 = 40;
var tot2 = total(kor2, eng2, math2);
var avg2 = average(tot2, 3);
console.log(nam2, tot2, avg2)

//이전의 코드는 학생의 점수들이 개별적으로 취급되어
//잘못된 연산이 수행될 수 있다는 치명적인 문제가 있습니다.
//따라서 밀접하게 관련이 있는 데이터를 하나로 묶어서 처리하기
//위해 객체를 도입합니다/

//이전의 코드는 데이터와 데이터를 처리하는 함수가 이원화되어 있어
//논리적인 오류인 버그가 발생할 수 있다는 치명적인 문제가
function total(st) { return st.kor + st.eng + st.math;}
function average(st) {
    return (st.kor + st.eng + st.math) / st.cnt;
}
const daniel = {
    nam: "daniel",
    kor: 10,
    eng: 20,
    math: 30,
    cnt: 3
};

var tot1 = total(daniel);
var avg1 = average(daniel);
console.log(daniel.nam, tot1, avg1);

const susan = {
    nam: "susan",
    kor: 20,
    eng: 30,
    math: 40,
    cnt: 3
};
var tot2 = total(susan);
var avg2 = average(susan);
console.log(susan.nam, tot2, avg2);

//함수 안에서 객체 안의 속성에 접근할 수 있도록
//JS는 this라는 키워드를 제공합니다
//this 키워드의 의미는 현재 객체 자신을 의미하는
//변수의 의미로 해석하면 됩니다.
//이와 같이 this라는 개념을 사용할 수 있는 함수를
//다른 함수와 구분하기 위해 메서드라고 부릅니다
total: function() {
    return this.kor + this.eng + this.math;
}
average: function() {
    return (this.kor + this.eng + this.math) / this.cnt;
}


//참고 ! 여기서 다니엘과 수잔을 객체라고한다
//객체: 사물 또는 물건
//현실 세계의 사물 또는 물건은 2가지의 개념의 추상화할 수 있습니다
//1. 상태나 속성
//2. 행위나 기능

//ex)볼펜
//1. 상태나 속성: 검정색, 0.5mm, 모나미,...
//2. 행위나 기능: 쓰다, 그리다....

//이전의 코드는 학생 정보를 저장하기 위해 사용자가 일일이 
//객체를 정의해야 한다는 단점이 있습니다. 이를 해결하기 위해
//함수르를 도입하도록 합니다.

function createStudent(name, kor, eng, math) {
    const obj = {}; //빈 객체를 생성합니다
    obj.name = name;
    obj.kor = kor;
    obj.eng = eng;
    obj.math = math;
    obj.total = function() {
        return this.kor + this.eng + this.math;
    },
    obj.average = function() {
        return (this.kor + this.eng + this.math) / 3;
    }
    return obj;
}

var daniel = createStudent(name, kor, eng, math) {}