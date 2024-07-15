function strReverse(str){
    let ansStr=""
    let splStr=str.split(" ")
for(let i=0;i<splStr.length;i++){
    let reversedStr=reverse(splStr[i]);
    if(ansStr.length==0){
        ansStr+=reversedStr;
    }
    else{
        ansStr+=" "+reversedStr;
    }
}

return ansStr;
}

function reverse(str){
    let rev=str.split("").reverse().join("");
    console.log(rev)
    return rev;
}
console.log(strReverse("close the door"))