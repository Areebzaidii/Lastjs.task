

let  finnal=[]
  let abc=[];
  const words = ["bat","tab","hat","fay","yaf","tah"];
  for(i=0;i<words.length;i++){
    var forword="";
  for(j=words[i].length-1;j>=0;j--){
    forword+=words[i][j];
    
    
  }
  abc.push(forword);
}
function reverse(word){
  return word.split("").reverse().join("");
}

for(let i=0;i<words.length;i++){
  for(let j=0;j<abc.length;j++){
    if((words[i]===abc[j])){
      finnal.push([words[i], reverse(abc[j])]);
      
      words.splice(i, 1);
      abc.splice(j, 1);
      
    }
    
    
  }
}
console.log(finnal)