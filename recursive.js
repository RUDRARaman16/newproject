var text="ABCBCC"
//find first recursive charaacter
var res={}
for (let ch of text) {
    //A
    if( ch in res ){
       console.log(ch + " is the first recursive character");
       break;
    }
    else{
        res[ch]=1    }
}

//  k  v
//  a   1
//  b   1