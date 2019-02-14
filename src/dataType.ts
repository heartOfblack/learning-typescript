import {Color} from './enum'
import { from } from "_array-flatten@2.1.2@array-flatten";

class dataType{
_numbuer:number=1;
_string:string=`string类型`;
_boolean:boolean=true;
_array:object[]=[{s:1}];
_tuple:[number,string]=[1,''];//元祖，已知长度和类型的数组，在编辑器中如果字面量赋值不正确直接就会提示错误

Assertion:any="asfasf";//断言判断

constructor(){
/* 断言 两种写法 */
  console.log((this.Assertion as string).length,'=========')
  console.log(<string>this.Assertion.length,'============')
  /* 
  断言，作用在于，当我们不确定某个接收的数据类型的时候，比如
  function getLength(something: string | number): number {
    return something.length;//此处会报错，因为number不存在这个属性。 为此，我们需要断言something就是string类型，再来判断，虽然一般情况下都是确认的类型。
    还有一些情况，比如安卓和IOS调用js方法，传过来的object，安卓会作为字符串传过来，但是IOS会作为一个 object，此时可以对参数做断言。然后判断其属性，
    如果属性不存在，说明传过来的是一个字符串，那么把这个JSON字符串转为object类型即可

    改成如下
     if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
  
  */
/* ---断言--- */


}



}

export default dataType;