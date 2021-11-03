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
let empDailyWageMap = new Map();
let empDailyHrsAndWageArray = new Array();

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
let day = 0;
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkigDays < MAX_WORKING_DAYS) {
    totalWorkigDays++;
    day++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let emphrs = getEmployeeWage(employeeCheck);
    totalEmpHrs += emphrs;
    let dailyWage = calculateWage(emphrs)
    empDailyWageArray.push(dailyWage); 
    empDailyWageMap.set(totalWorkigDays, calculateWage(emphrs));
    let empWageObject = {
        dayNumber: day,
        dailyHrs: emphrs,
        dailyWage: dailyWage
    }
    empDailyHrsAndWageArray.push(empWageObject);
}

//UC-10
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;
}

console.log("UC_8 - Emp Wage Mapp total Hrs : ",
Array.from(empDailyWageMap.values()).reduce(totalWages,0));

let empWage = calculateWage(totalEmpHrs);
console.log("Daily Employee Wage stored in Array:\n"+empDailyWageArray);
console.log(" Total Employee Wage is: " + empWage + " for Total Employee Work Hours: " + totalEmpHrs
+" Total Working Days: "+totalWorkigDays);

let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nUsing ForEach Loop, Total Wage: " + totalEmpWage);

// UC 7A using Reduce Method
let totalempWages = 0;
function totalWages(totalempwages, dailyWage) {
    return totalempwages + dailyWage;
}
let totalEmpWageUsingReduce = empDailyWageArray.reduce(totalWages, 0);
console.log("\nUsing Reduce Method, Total Wage: " + totalEmpWageUsingReduce);

// UC 7B Showing Day and DailyWage Using MAP helper function
let counter = 0;
function dayAndDailyWageMap(dailyWage) {
    counter++;
    return counter + " -> " + dailyWage;
}
let dayAndDailyWageMapArray = new Array();
dayAndDailyWageMapArray = empDailyWageArray.map(dayAndDailyWageMap);
console.log("\nUsing Map Printing Day with DailyWage.\n");
console.log(dayAndDailyWageMapArray);

/* UC 7C Showing/Storing  Only Full Time Wage =160 Earned Days in Array 
* using Filter function/Method
*/
function fullTimeWageDay(dailyWage) {
    return dailyWage.includes("160");
}
let fullTimeWageArray = dayAndDailyWageMapArray.filter(fullTimeWageDay);
console.log("\nUsing Filter Storing Only FullTimewage into Array\n");
console.log(fullTimeWageArray);

//UC 7D  Finding first of Full Time Wage in Array using Find function
let fullTimeWageFirstOccurance = dayAndDailyWageMapArray.find(fullTimeWageDay);
console.log("\nfirst Occurence of Full Time Wage(160) 0n :\n");
console.log(fullTimeWageFirstOccurance);

// UC 7E Checking UC7C result Array Full time Wage Array , truly Holds Full timewage
// Using Every function

console.log("Is fulltimeWageArray truely holds fulltime Wage: "+fullTimeWageArray.every(fullTimeWageDay));

/*
 UC 7F Check for PartTime Wage in empWageDaily Array and Performing All other opertions too
 */
 function partTimeWageDay(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Checking for parttimeWage(80) in map Array Present or not:\n" + dayAndDailyWageMapArray.some(partTimeWageDay));
// Storing only partTimeWage days in parttimeWagearray using Filter
let partTimeWageArray = dayAndDailyWageMapArray.filter(partTimeWageDay);
console.log("Part timeWage Days:\n" + partTimeWageArray);
// checking parttimeWageArray truly holds Parttime totalWages
console.log("Is parttimeWageArray truely holds Parttime Wage: " + partTimeWageArray.every(partTimeWageDay));
let partTimeWageFirstOccurance = dayAndDailyWageMapArray.find(partTimeWageDay);
console.log("\nfirst Occurence of Part Time Wage(80) 0n :");
console.log(partTimeWageFirstOccurance);

/* 
* UC 7GFinding the Number of Days Employee Worked out Of 20Days
*/

function totalFullTimeWorked(numOfFullTimeDays, dailyWage) {
    if (dailyWage == 160)
        return numOfFullTimeDays + 1;
    return numOfFullTimeDays;
}
function totalPartTimesWorked(numOfPartTimeDays, dailyWage) {
    if (dailyWage == 80)
        return numOfPartTimeDays + 1;
    return numOfPartTimeDays;
}

let partTimeWorkedDays = empDailyWageArray.reduce(totalFullTimeWorked, 0);
console.log("Employee Worked Part time for " + partTimeWorkedDays + " Days");
let fullTimeWorkedDays = empDailyWageArray.reduce(totalPartTimesWorked, 0);
console.log("Employee Worked Full time for " + fullTimeWorkedDays + " Days");
let totalDaysWorked= fullTimeWorkedDays+partTimeWorkedDays;
console.log("Employee Total Worked  for " + totalDaysWorked + " Days");

//UC_9
const findTotal = (totalVal, dailyVal)=>{
    return totalVal + dailyVal;
    }
    
    let count = 0;
    
    let totalHours = Array
                    .from(empDailyWageMap.values())
                    .reduce(findTotal, 0);
    let totalSalary = empDailyWageArray
                    . filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal,0);
    
    console. log("UC9 - Emp Wage with Arrow.: " + " Total Hours:"+
                        totalHours + " Total Wages:" + totalSalary);
    
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    
    empDailyWageMap.forEach( (value, key, map) => {
         if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key); 
        else nonWorkingDays.push(key);
     });
      
    console. log("Full Working Days: "+fullWorkingDays);
    console. log("Part Working Days: "+partWorkingDays);
    console. log("Non Working Days: "+nonWorkingDays);

    console.log("creating, Displaying The Object Stored in Array")
console.log( empDailyHrsAndWageArray);