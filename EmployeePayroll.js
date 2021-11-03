class EmployeePayrollData{
   
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    get name() {
     return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)) {
            this._name=name;
            }
        else throw new Error('Name is Incorrect');
    }

    get id(){
        return this._id;
    }
    set id(id){
        let idRegex=RegExp('^[1-9][0-9]*$')
        if(idRegex.test(id)){
            this._id=id;
        }
        else throw new Error('Id is Incorrect');
    }

    get salary(){ return this._salary;}

    set salary(salary){
        let salaryRegex=RegExp('^[1-9][0-9]*$')
        if(salaryRegex.test(salary)){
            this._salary=salary;
        }
        else throw new Error('salary is Incorrect');
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        let genderRegex=RegExp('^(?:m|M|male|Male|f|F|female|Female)$')
        if(genderRegex.test(gender)){
            this._gender=gender;
        }
        else throw new Error('gender is Incorrect');
    }

    get startDate(){
        return this._startDate;
    }
        
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate<new Date())
            this._startDate=startDate;
        else throw new Error('InValid startDate');
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
try{
    let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",30000,"M",new Date('2020-09-13'));
    console.log(newEmployeePayrollData);

    let newEmployeePayrollData1=new EmployeePayrollData(1,"Terrisa",30000,"male",new Date('2021-09-13'));
    console.log(newEmployeePayrollData1);

    let newEmployeePayrollData2=new EmployeePayrollData(0,"Terrisa",30000,"M",new Date());
    console.log(newEmployeePayrollData2);

    let newEmployeePayrollData3=new EmployeePayrollData(2,"Terrisa",0,"m",new Date());
    console.log(newEmployeePayrollData3);
}catch(e){
    console.error(e);
}