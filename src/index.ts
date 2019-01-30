import dataType from './dataType';//基础数据类型



let _dataType=new dataType();
document.write(JSON.stringify(_dataType._array));//document.write(_dataType._array) 会提示错误。。类型“[]”的参数不能赋给类型“string”的参数。阿岳真的好严格啊
console.log(_dataType._array[6])//越界访问的时候
