"use strict";
// 使用class关键字定义类
/**
 *  类中主要包含了两个部分
 *  属性/方法
 */
class Person {
    constructor() {
        // 定义实例属性
        this.name = '孙悟空';
        this.age = 18;
    }
    static sayHello() {
        console.log('hello!');
    }
}
// 定义类属性（静态属性）
Person.person = 'people';
const per = new Person();
console.log(per);
console.log(Person.person);
Person.sayHello();
// TS抽象类定义
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    sayName() {
        console.log('汪汪汪');
    }
}
// 属性的封装
class Andy {
    constructor(name) {
        this._name = name;
    }
    // 定义一个访问器属性name
    get name() {
        console.log('get name执行了');
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
