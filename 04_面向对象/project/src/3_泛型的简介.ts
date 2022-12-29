/* function fn(a: any):any{
    return a
} */

/**
 *  在定义函数或类的时候，如果类型不明确可以使用泛型
 */

function fn<T>(a: T): T{
    return a
}

// 可以直接调用泛型函数
let result1 = fn(10) // 参数类型是number，返回值是number

let result2 = fn<string>('hello') // 显式指定泛型类型

// 指定多个泛型
function fn2<T, K>(a: T, b: K): T{
    console.log(b);
    return a
}

fn2<number, string>(123, 'hello')

// 限制泛型的范围
// 定义一个泛型
interface inter{
    length: number
}
// 限制泛型T的类型必须是实现了inter接口的子类
// T extends XXX    限制T必须是inter的子类
function fn3<T extends inter>(a: T): number{ 
    return a.length
}
fn3({length: 20});

// 类中的泛型
class MyClass<T>{
    name: T;
    constructor(name: T){
        this.name = name;
    }
}

const mc = new MyClass<string>('dafeiq')

