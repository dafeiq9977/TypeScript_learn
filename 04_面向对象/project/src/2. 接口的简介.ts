/**
 * 
 */

type myType = {
    name: string,
    age: number,
    [propname: string]: unknown,
}

const obj: myType = {
    name: 'qpr',
    age: 20,
    sex: 'male',
}

/**
 * 接口定义一个类的结构，可以被class implements
 * 接口也可以当成类型声明来使用
 */

interface myInterface{
    name: string,
    age: number,
}

// 重复定义名称相同的接口会和之前的接口定义取并集
interface myInterface{
    sex: string,
}