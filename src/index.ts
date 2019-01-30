import dataType from './dataType';


let _dataType=new dataType();
document.write(JSON.stringify(_dataType._array));//document.write(_dataType._array) 会提示错误。。类型“[]”的参数不能赋给类型“string”的参数。阿岳真的好严格啊
console.log(_dataType._array)
/* class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user); */