// document.body.innerHTML += "<h1 style='color:red;'>hello, world</h1>";

// 1. 엘리먼트 객체 생성
const h1 = document.createElement("h1");

// 2. 속성 설정
h1.textContent = "hello, world";
h1.style.color = "red";

// 3. 트리에 연결
document.body.appendChild(h1);

