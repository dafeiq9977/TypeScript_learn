var a;
a = 1;
// 声明完变量直接赋值
var b = true;
// 如果变量声明和赋值同时进行，TS会自动对变量类型检测
var c; // c就是boolean类型
// JS函数不考虑参数类型和个数
// 对函数参数类型和个数进行限制，
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
// TS常用类型
/**
 * number
 * string
 * boolean
 * 字面量
 * any
 * unknown
 * void
 * never
 * object
 * array
 * tutple
 * enum
 */
// 字面量：d只能是10
var d;
// e可以是male或female
var e;
// f是boolean或string
var f;
// any：可以是任意类型，设置any后相当于关闭了TS类型检测
// 不建议使用any
// any变量可以赋值给任意变量，所以会霍霍其它变量
var g;
// unknown：也可以是任何类型，是类型安全的any
// unknown类型不能赋值给其它类型变量，所以比any要好
var h;
h = 'hello';
// 类型断言：告诉解析器变量类型就是某某类型
c = h;
// 或者
c = h;
