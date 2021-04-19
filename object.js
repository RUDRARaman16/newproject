

//to implement word count
var text="hello hai helllo hai good";
//accessing values by using keys

var words=text.split("")
var result={}  //creating an empty object
for(let word of words){
  //one by one iteration
  if(word in result){
       result[word]+=1;
  }
  else{
      result[word]=1
  }
}





  //result
  //
  //hello 2
  //hai 2

}