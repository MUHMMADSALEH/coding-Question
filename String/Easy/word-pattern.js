var wordPattern = function(pattern, s) {
    let ArrayS=s.split(" ")
    if(ArrayS.length!=pattern.length) return false
    
    let patternMap=new Map()
    let sMap=new Map()
    
    for(let i=0;i<pattern.length;i++){
        let charP=pattern[i]
        let eleS=ArrayS[i]
        if(patternMap.has(charP)){
            if(patternMap.get(charP)!==eleS){
                return false
            }
        }
        else{
            patternMap.set(charP,eleS)
        }
        if(sMap.has(eleS)){
            if(sMap.get(eleS)!==charP){
                return false
            }
        }
        else{
            sMap.set(eleS,charP)
        }
        
    }
    return true;
        
};