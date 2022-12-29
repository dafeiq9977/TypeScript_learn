// 使用class关键字定义类
/**
 *  类中主要包含了两个部分
 *  属性/方法
 */
class Person{
    // 定义实例属性
    name: string = '孙悟空';
    age: number = 18;

    // 定义类属性（静态属性）
    static person: string = 'people';
    static sayHello(){
        console.log('hello!')
    }
}

const per = new Person();

console.log(per)
console.log(Person.person)
Person.sayHello()

// TS抽象类定义
abstract class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    // 定义一个抽象方法，继承这个类的子类必须实现这个方法
    abstract sayName():void;
}

class Dog extends Animal{
    sayName(): void {
        console.log('汪汪汪');
    }
}

// 属性的封装
class Andy{
    // 定义一个Andy类的私有属性
    // 类的实例属性默认是public
    // 除了public还有protected
    private _name: string;

    constructor(name:string){
        this._name = name
    }

    // 定义一个访问器属性name
    get name(){
        console.log('get name执行了')
        return this._name
    }
    set name(value){
        this._name = value
    }
}