let a: number;

a = 1;

// 声明完变量直接赋值
let b: boolean = true;

// 如果变量声明和赋值同时进行，TS会自动对变量类型检测
let c: string;   // c就是boolean类型

// JS函数不考虑参数类型和个数
// 对函数参数类型和个数进行限制，
function sum(a: number, b: number): number{
    return a+b;
}

console.log(sum(123,456))

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
let d: 10;

// e可以是male或female
let e: 'male' | 'female';

// f是boolean或string
let f: boolean | string;

// any：可以是任意类型，设置any后相当于关闭了TS类型检测
// 不建议使用any
// any变量可以赋值给任意变量，所以会霍霍其它变量
let g: any;

// unknown：也可以是任何类型，是类型安全的any
// unknown类型不能赋值给其它类型变量，所以比any要好
let h: unknown;
h = 'hello'

// 类型断言：告诉解析器变量类型就是某某类型
c = h as string;
// 或者
c = <string>h;

// void和never
// void表示空：以函数为例，就是没有返回值
function fn(): void{

}
// never：表示永远没有值，以函数为例，就是函数永远不返回，比如抛出错误
function fn2(): never{
    throw new Error('报错了')
}

// object：变量必须是一个对象
// 不常用，因为JS里都是对象
let i: Object;
i = {}
i = function(){}

// 细致化指定对象类型
// name必选，age是可选的，有问号
let j: {name: string, age?: number};
j = {name: "孙悟空", age: 18};

// 对象包含任意其它属性：[propName: string]:any
let k: {name: string, [propName: string]: any};
k = {name: '猪八戒', age: 20, c: 28};

// 限制函数结构类型声明
// l是一个函数，有两个number类型的参数，返回值是number
let l:(a:number,b:number)=>number;

// 数组类型声明：array
// string[]表示数组，数组里都是string
let m: string[];
m = ['a' ,'b'];

// 
let n: Array<number>;
n = [1,2,3];

// tuple：元组，是固定长度的数组
// o是一个长度为2，且都是string的数组
let o: [string, string];

// enum：枚举；
// 定义一个Gender枚举类
enum Gender{
    Male,
    Female
}

let p: {name: string, gender: Gender};
p = {
    name: 'andy',
    gender: Gender.Male
}

// &表示同时是左右两边的类型
let q: {name: string} & {age: number};

// 类型别名：简化类型使用
// 创建string类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let r: myType;
let s: myType;
