"use strict";
console.log('hello');
function add(a, b) {
    console.log(this);
    return a + b;
}
var box1 = document.getElementById('box1');
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
