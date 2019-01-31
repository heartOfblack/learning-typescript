
/**
 *解构
 *
 * @class deconstruction
 */
class deconstruction{
//对象解构,其中 ?表示其参数是可选的
//[pro:string]:any下面的 字符串索引签名可参考 interface.ts文件
   objDeconstruct=(obj:{a:string,b?:number,[pro:string]:any}) =>{
    console.log(obj.a,obj.b);// t,1000
  }
  //数组解构 注解模式
   arrayDeconstruct=([a,b=100]:[number,number?]) =>{
    console.log(a,b);
  }



}

export default deconstruction;