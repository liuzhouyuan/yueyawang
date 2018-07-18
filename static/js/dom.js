
export function getClass  (className) {
   return document.getElementsByClassName(className);
}

export function addClass (element , _className) {
    var className = element.className.split(' ');
    var classNameMap = {}

    for(var i=0;i<className.length;i++){
      classNameMap[ className[i]] = 1;
    }
    classNameMap[_className] = 1;

    className = [];
    for(i in classNameMap){
      className.push(i);
    }
    element.className = className.join(' ');

}


export function removeClass (element ,  _className) {
      var className = element.className.split(' ');
      var classNameMap = {}
      for(var i=0;i<className.length;i++){ 
        classNameMap[ className[i]] = 1;
      }
      delete classNameMap[_className];
      className = [];
      for(i in classNameMap){
        className.push(i);
      }
      element.className = className.join(' ');
}



export function removeArr(arr, item) {  
    for(var i=arr.length-1;i>=0;i--)  
      {  
       if(arr[i]==item)  
         {  
           arr.splice(i,1);  
          }  
       }  
    return arr;  
} 


export  function addArr(arr, item) {
  let index =arr.indexOf(item)
    if ( index =-1 ) {
       arr.push(item); 
    }else{
      return
    }
    
}  

export  function trim(item){
    return item.replace(/(^\s*)|(\s*$)/g, "")
}

export function GetDateStr(AddDayCount,n=1) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+n;//获取当前月份的日期
    var d = dd.getDate();
    return new Date(y+"-"+m+"-"+d)
}





