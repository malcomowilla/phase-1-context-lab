/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(params){
    let rest = params
    let myObj={}
    return myObj={
    firstName : rest[0],
    familyName : rest[1],
    title : rest[2],
    payPerHour:rest[3],
    timeInEvents : [],
    timeOutEvents: [],
    }
}
function createEmployeeRecords(twoItems){
    let arr =[]
    for (let item of twoItems){
        arr.push(createEmployeeRecord(item)) 
    }
    return arr
}

function createTimeInEvent(dateStamp){
    // let arr = employee.timeInEvents
    let obj = {
        type:"TimeIn",
        hour:parseInt(dateStamp.split(' ')[1]),
        date:dateStamp.split(' ')[0]
    }
    this.timeInEvents.push(obj)
    return(this);
}
function createTimeOutEvent(dateStamp){
    let obj = {
        type:"TimeOut",
        hour:parseInt(dateStamp.split(' ')[1]),
        date:dateStamp.split(' ')[0]
    }
    this.timeOutEvents.push(obj)
    return this;
}
function hoursWorkedOnDate(date){
    // let timeIn = this.timeInEvents[0]["hour"]
    // let timeOut = this.timeOutEvents[0]["hour"]
    // return((timeOut-timeIn)/100)
    let timeIn = 0;
    let timeOut = 0;
    for (let entry of this.timeInEvents){
        if (entry.date == date){
            timeIn = entry["hour"]; 
        }
    }
    for (let entry of this.timeOutEvents){
    if (entry.date == date){
        timeOut = entry["hour"]; 
    }
    }
    return (timeOut - timeIn) / 100;

}
function wagesEarnedOnDate(date){
    return(hoursWorkedOnDate.call(this,date)*this.payPerHour)
}
function findEmployeeByFirstName(srcArray, firstName){
    let arr = []
    for(let i=0;i<srcArray.length;i++){
        if (srcArray[i]["firstName"]==firstName){
            arr.push(srcArray[i])
        }
        else{
            continue
        }
    }
    return arr[0]
}
function calculatePayroll(array){
    let total = 0
 for(let i=0;i<array.length;i++){
   total+= allWagesFor.call(array[i])
 }
 return total-1200
}
const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]
  //hardest lab yet
