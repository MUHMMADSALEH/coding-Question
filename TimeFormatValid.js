// You are given time in the format hh:mm  (24hr format) with one missing digit.
// Write a script to find the highest digit between 0-9 that makes it valid time.

// The input to the script will have ? as the missing digit , eg

// 02:?5
// 1?:0?

// are valid input. Your program should print the highest possible value of x in rance 0-9 so that 
// the time is valid.



function validTime(time){
     // Iterate from 9 to 0 to find the highest valid digit
     for (let x = 9; x >= 0; x--) {
        // let hour = time[0];
        // let minute = time[3];

        // Replace the '?' with current digit 'x'
        let validTime = time.replace('?', x.toString());

        // Split the time into hours and minutes
        let [hh, mm] = validTime.split(':');

        // Check if hours and minutes are within valid range
        if (parseInt(hh) >= 0 && parseInt(hh) <= 23 && parseInt(mm) >= 0 && parseInt(mm) <= 59) {
          
            return x; // Print the highest valid digit and exit
        }
    }
}
// console.log(validTime("03:3?"))
// console.log(validTime("02:?9"))
console.log(validTime("0?:00"))
// console.log(validTime("0?:05"))