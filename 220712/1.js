 //뱐수의 증감
 var age = 1;
 console.log(age);

 age = age + 1; //-> age = 1 + 1 -> age = 2
 console.log(age);
 //복합 대입 연산자: +=, -=, *=, /= ...
 age += 1;
 console.log(age);
 //증감 연산자: 단항 연산자
 //증감 연산자가 단독으로 사용될 경우, 앞에 있으나 뒤에 있으나
 //동일하게 동작하게 합니다
 ++age; //1증가
 console.log(age);
 console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

 //만약 2개 이상의 연산자와 함께 사용하면 다르게 동작합니다.
 //연산자가 앞에 있는 경우: 피연산자의 값을 먼저 증가시킨 후, 사용
 //연산자가 뒤에 있는 경우: 피연산자의 값을 사용 후, 증가
 var x = 0;
 var y = ++x;   //var y = 1;
 console.log(x); //1
 console.log(y); // 1

 x = 0;
 y = x++; //문장의 끝을 만나면 증가
 console.log(x); //1
 console.log(y); //0
 console.log

 //-- 연산자: 피연산자의 값을 1감소시킴
 //연산자가 앞에 있는 경우: 피연산자의 값을 먼저 감소시킨 후, 사용
 //연산자가 뒤에 있는 경우: 피연산자의 값을 사용 후, 감소
 console.log('ㅡㅡㅡㅡ');
 var a = 1;
 var b = --a;
 console.log(a);
 console.log(b);

 var a = 1;
 var b = a--;
 console.log(a);
 console.log(b);