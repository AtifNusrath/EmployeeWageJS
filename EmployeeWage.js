console.log('Welcome to Employee Wage');

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const IS_PRESENT = 1;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkigDays = 0;
let empDailyWageArray = new Array();


/*let employeeCheck = Math.floor(Math.random() * 10 % 2);
if (employeeCheck == IS_PRESENT) {
    console.log("Employee Is Present");
} 
else {
    console.log("Employee Is Absent");
}*/

function getEmployeeWage(eCheck){
    switch (eCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

function calculateWage(empHrs) {
    return empHrs *  WAGE_PER_HR;
}

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkigDays < MAX_WORKING_DAYS) {
    totalWorkigDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let emphrs = getEmployeeWage(employeeCheck);
    totalEmpHrs += emphrs;
    empDailyWageArray.push(calculateWage(emphrs)); 
    
}

let totalEmpWage = calculateWage(totalEmpHrs);
console.log("Daily Employee Wage stored in Array:\n"+empDailyWageArray);
console.log(" Total Employee Wage is: " + totalEmpWage + " for Total Employee Work Hours: " + totalEmpHrs
+" Total Working Days: "+totalWorkigDays);