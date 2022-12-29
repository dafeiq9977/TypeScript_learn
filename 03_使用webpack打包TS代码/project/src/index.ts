function sum(a:number, b:number){
    return a + b
}

console.log(sum(123, 456))
console.log('extra')

import { m1 } from './m1';

console.log(m1);

// 这里用一下ES6的语法特性const
const obj = {name: '孙悟空', age: 18};
console.log(obj)
obj.age = 20;
console.log(obj)

// 再用一下ES6的全新对象promise
console.log(Promise)