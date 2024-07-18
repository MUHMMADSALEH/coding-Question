// You are given timestamp (date with time) and duration in hours.
// timestamp format is "YYYY-MM-DD HH:MM"

// Write a script to find the time that occurs duration business hours after timestamp.
// For the sake of this task, let us assume the working hours is 9am to 6pm , 7 days a week.

// Suppose the given timestamp is 2022-08-01 10:30 
// and the duration is 4 hours.
// Then the next business date would be 2022-08-01 14:30.

// Similar if the given timestamp is 2022-08-01 17:00 
// and the duration is 3.5 hours.
// Then the next business date would be 2022-08-02 11:30.
// The timestamp and duration shall be provided ',' (comma) separated eg

// 2022-08-01 17:00,3.5
// The program should print the final timestamp in "YYYY-MM-DD HH:MM" format
// as output.

// For example:

// Test	Input	Result
// case-1
// 2022-08-01 17:00,6
// output
// 2022-08-02 14:00


function calculateTime(timestamp) {
    const [timestampStr, durationStr] = timestamp.trim().split(',');
    const [baseDateStr, baseTimeStr] = timestampStr.split(' ');

    // Parse base timestamp
    const [baseYear, baseMonth, baseDay] = baseDateStr.split('-').map(Number);
    const [baseHour, baseMinute] = baseTimeStr.split(':').map(Number);

    // Parse duration
    const duration = parseFloat(durationStr);

    // Define business hours
    const businessStartHour = 9;
    const businessEndHour = 18; // 6pm in 24-hour format

    // Create base timestamp
    const baseTimestamp = new Date(baseYear, baseMonth - 1, baseDay, baseHour, baseMinute, 0, 0);

    // Calculate end time
    let endTime = addBusinessHours(baseTimestamp, duration, businessStartHour, businessEndHour);

    // Format the final timestamp as "YYYY-MM-DD HH:MM"
    const result = `${endTime.getFullYear()}-${padZero(endTime.getMonth() + 1)}-${padZero(endTime.getDate())} ${padZero(endTime.getHours())}:${padZero(endTime.getMinutes())}`;

    return result;
}

// Function to add business hours to a date
function addBusinessHours(baseTimestamp, hours, startHour, endHour) {
    let currentDateTime = new Date(baseTimestamp);

    // Calculate total minutes to add
    let totalMinutesToAdd = hours * 60;

    while (totalMinutesToAdd > 0) {
        // Skip to the start of the next business day if after business hours
        if (currentDateTime.getHours() >= endHour || currentDateTime.getHours() < startHour) {
            currentDateTime.setHours(startHour, 0, 0, 0); // Start of next business day
        }

        // Calculate available working minutes in the current day
        const endOfWorkingDay = new Date(currentDateTime);
        endOfWorkingDay.setHours(endHour, 0, 0, 0); // End of current business day

        const remainingMinutesToday = (endOfWorkingDay - currentDateTime) / (60 * 1000);

        // If remaining duration fits in today's business hours
        if (remainingMinutesToday >= totalMinutesToAdd) {
            currentDateTime = new Date(currentDateTime.getTime() + totalMinutesToAdd * 60 * 1000);
            totalMinutesToAdd = 0; // All duration consumed
        } else {
            // Consume remaining minutes today and move to the next business day
            totalMinutesToAdd -= remainingMinutesToday;
            currentDateTime = new Date(currentDateTime.getTime() + remainingMinutesToday * 60 * 1000);
            currentDateTime.setHours(startHour, 0, 0, 0); // Start of next business day
        }
    }

    return currentDateTime;
}

// Helper function to pad single digit numbers with leading zero
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// Test the function
try {
    console.log(calculateTime("2022-08-01 14:00,4")); // Expected: "2022-08-01 18:00"
    console.log(calculateTime("2022-08-01 17:00,6")); // Expected: "2022-08-02 14:00"
    console.log(calculateTime("2022-08-01 09:00,6")); // Expected: "2022-08-01 15:00"
    console.log(calculateTime("2022-08-01 16:15,4.25")); // Expected: "2022-08-02 11:30"
} catch (error) {
    console.error(error.message);
}
