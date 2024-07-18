var canConstruct = function(ransomNote, magazine) {
   //brute force
    let SplRans=ransomNote.split("")
    let SplMag=magazine.split("")
    let i=0
    while(SplRans.length!=0){
        if(SplMag.indexOf(SplRans[i])>-1){
            let index=SplMag.indexOf(SplRans[i])
            console.log(index)
            SplMag.splice(index,1)
            SplRans.shift()
          
            
        }
        else{
            return false;
        }
        
    }
    return true;

//optimize solution

    // var canConstruct = function(ransomNote, magazine) {
    //     const vocab = {};
        
    //     for (let i = 0; i < magazine.length; i++) {
    //         const char = magazine[i];
    //         vocab[char] ? vocab[magazine[i]]++ : vocab[magazine[i]] = 1;
    //     }
        
    //     for (let i = 0; i < ransomNote.length; i++) {
    //         const char = ransomNote[i];
    //         if (vocab[char] === 0 || !vocab[char]) {
    //             return false;
    //         }
    //         vocab[char]--;
    //     }
        
    //     return true;
    };


    console.log(canConstruct("baa","aab"))