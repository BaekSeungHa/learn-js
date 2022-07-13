const scores = [10, 20, 30];
console.log(scores[0]);

//키와 벨류를 최소 단위로 하는 자료구조: 객체(Object)
//파이썬의 딕셔너리 개념

//생성 방법:
//객체명 = {키1:값1, 키2:값2, .....}
//key를 속성(property)

//키 또는 속성의 작명 규칙
//1. 숫자로 시작할 수 없습니다.
//2. 예약된 키워드를 사용할 수 없습니다.
//3. 기호는 $와 _만 가능합니    다.

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


//속성에 접근하는 방법
//1. 객체와 속성명
//2. 객채명 ["속성명"]

const p3 = {
    name: "susan",
    age: 30,
    eamil: "susan@hello.com"
};

//for (const of): 배열에서 사용
for(const key in p3) { //객체에서 사용
    console.log(key);
    console.log(p3[key]);
}

//키만 확인하고 싶은 경우
console.log(Object.keys(p3));
//value만 확인하고 싶은 경우
console.log(Object.values(p3));
//둘다 확인하고 싶은 경우
console.log(Object.entries(p3))

//속성의 추가
const p4 = {}; //비어 있는 객체 생성
console.log(p4);

//usage: 객체명 




//속성의 갱신
const p5 = {
    name: "monica",
    age: 90
};
console.log(p5);

//usage 객체명 속성명 = 값;
p5.name = "Monica";
console.log(p5);

//속성의 삭제 delete 키워드를 사용
const p6 = {
    name: "daniel",
    age: 40
};
console.log(p6);

//usage: delete 객체명, 속성명
delete p6.name;
console.log(p6);