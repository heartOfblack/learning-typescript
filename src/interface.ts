/* 
对象字面量会被特殊对待而且会经过 额外属性检查，
当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时
*/

interface Student{
name:string;
age?:number;
hight?:number;
//another property
[another:string]:any;//如果此处不写这个 字符串索引签名，则在 构造函数中的赋值则会报错，因为将""字面量""
//赋值给变量或者传参的时候会进行额外属性检查。(如果是将字面量付给一个变量再做相同操作则不会报错)
//而不是仅仅简单的满足interface 中的约束，比如name必须，而age 和 hight 可选，但是当赋值的时候多了一个t参数，则会进行额外属性检测，编译不通过，报错
readonly school:string;//一旦赋值，只读
}


class Interface{
  constructor(){
    let studentA:Student={name:'heartofblack',t:1,school:'中心小学'};//school属性一旦赋值之后不允许更改
    //只读属性赋值后不可更改
    studentA.name="test";
    console.log(Object.getOwnPropertyDescriptor(studentA,"school"));//writable ==true  所以，ts做的只是做检测，并不实质改变修饰器，下面一行注释的代码会有错误提示
    //但是仍然可以运行，切运行结果是正确的。
    // studentA.school="dd";
    console.log(studentA.school)
  }
}


export default Interface;