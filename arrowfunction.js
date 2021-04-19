// arrow function
function cube(num1){
    return num**3;
}


//remove function keyword and return
//remove function name
 //assign it to a daata type say var or let
 //then use arrow function
//  var cube=num1=>num1**3;

//  let add=(num1,num2)=>num1+num2;
function sub(num1,num2){
 if(num1<num2){
     let tem=num1;
     num1=num2;
     num2=tem;
 }

 
 return num1-num2;
}
console.log(sub(10,20)); 


var sub=(num1,num2)=>{
    if(num1<num2){
        let tem=num1;
        num1=num2;
        num2=tem;
    }
   
    
    return num1-num2;


}
console.log(sub(2,4));
//  let mul=(num1,num2)=>num1*num2;
//  let div=(num1,num2)=>num1/num2;
//  console.log(add(2,3));
//  console.log(sub(6,3)); 
//  console.log(cube(3));
//  console.log(mul(2,3));
//  console.log(div(6,3));

 var arr=[12,111,12,13,14];
 arr.sort((i,j)=>i-j)
 for(let array in arr){
     console.log(arr);
     break;
 }




 /var temp=[
     {distname:"tvm",temp:25 }
     {distname:"ekm",temp:25 }

     {distname:"ttsr",temp:25 }

     {distname:"apy",temp:25 }

     {distname:"ktm",temp:25 }
     {distname:"pkd",temp:25 }
     {distname:"knr",temp:25 }


 ]