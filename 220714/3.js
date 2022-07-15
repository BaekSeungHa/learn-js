const h2 = document.getElementsByTagName("h2")[0];

// 텍스트의 내용을 변경합니다.
h2.textContent = "goodbye, buddy";
h2.style.color = "red";
h2.style.backgroundColor = "black";

const img = document.getElementsByTagName("img")[0];

// 속성 설정하기
// img.setAttribute("src", "http://placedog.net/400/300");
img.src = "http://placedog.net/400/300";

// 속성 확인하기
// console.log(img.getAttribute("src"));
console.log(img.src);

// HTML5 표준에서 제공하는 속성은 .을 사용하여 접근할 수 있습니다.
// 표준에서 제공하지 않는 속성을 처리할 때는 setAttribute,
// getAttribute를 사용하시면 됩니다.
