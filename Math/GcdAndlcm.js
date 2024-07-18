function gcdAndLcm(n1,n2){
  let on1=n1;
  let on2=n2
   
 
    while(n1%n2!=0){
    
       
        let rem=n1%n2;
        n1=n2;
        n2=rem
       

    }
    let gcd=n2;
    let lcm=(on1*on2)/gcd
   console.log(gcd)
   console.log(lcm)
};
gcdAndLcm(36,24)