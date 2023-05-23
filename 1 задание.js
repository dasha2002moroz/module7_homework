const obj = new Object();

obj.one = '1';
obj.two = 2;
obj.three;
const check = function(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log(key + ': '+ obj[key]);
    }
  }
}
check(obj);
  
