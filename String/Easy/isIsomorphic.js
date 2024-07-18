var isIsomorphic = function(s, t) {
    
    if(s.length!=t.length) return false
    
    let mapS=new Map()
    let mapT=new Map()
    
    for(let i=0;i<s.length;i++){
        let charS=s[i]
        let charT=t[i]
        if(mapS.has(charS)){
            if(mapS.get(charS)!==charT){
                return false
            }
        }
        else{
            mapS.set(charS,charT)
        }
        if(mapT.has(charT)){
            if(mapT.get(charT)!==charS){
                return false
            }
        }
        else{
            mapT.set(charT,charS)
        }
        
    }
    return true;
        
};
console.log(isIsomorphic("bbbbaaaba","aaaabbbba"))