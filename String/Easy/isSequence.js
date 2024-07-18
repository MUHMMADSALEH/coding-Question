var isSubsequence = function(s, t) {
    if(s.length==0){
        return true;
    }
    
    let s_pointer=0;
    let t_pointer=0;
    while(s_pointer<s.length && t_pointer<t.length){
        if(s.charAt(s_pointer)==t.charAt(t_pointer)){
            s_pointer++
        }
  t_pointer++;
    }


    return s_pointer==s.length
    }
   


console.log(isSubsequence("ab","baab"))