class EmployeePayrollData{
    
    id;
    salary;
    gender;
    startDate;
    
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
//getter and setter method
get name() {
     return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)) {
            console.log('setting',name)
             this._name=name;
            }
        else 
            throw new Error ('Name is Incorrect');
    }

    toString(){
        const options={year: 'numeric ',month: 'long',day:'numeric'};
        const empDate=!this.startDate?"unidefined":
        this.startDate.toLocalDateString("en-US",options);
          return "id = "+this.id+" , name= "+this._name+" , salary = "
          +this.salary+
          " , "+"gender = "+this.gender +" , startDate= "+empDate;
    }
}

let employeePayrollData =new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name="John";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData);