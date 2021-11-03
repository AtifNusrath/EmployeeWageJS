class EmployeePayrollData{
   
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
        this.email=params[5];
        this.zip=params[6];
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

    get email(){
        return  this._email;
     }
     set email(email){
         let regEmail=RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
         if(regEmail.test(email)){
             this._email=email;
         }
         else throw new Error ('InValid Email');
     }
     get zip(){
         return this._zip;
     }
     set zip(zip){
         let regZip=RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
         if(regZip.test(zip)){
             this._zip=zip;
         }
         else throw new Error ('Invalid Zip');
     }

    toString(){
        const options={year: 'numeric ',month: 'long',day:'numeric'};
        const empDate=!this.startDate?"unidefined":
        this.startDate.toLocalDateString("en-US",options);
        return "id = "+this.id+" , name= "+this._name+" , salary = "
        +this.salary+
        " , "+"gender = "+this.gender +" , startDate= "+empDate+
        " , "+" email: "+this.email+" pincode: "+this.zip;
    }
}
try{
    let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",30000,"M",new Date('2020-09-13'),'terrisa@gmail.com',342014);
    console.log(newEmployeePayrollData);

    let newEmployeePayrollData1=new EmployeePayrollData(1,"Terrisa",30000,"male",new Date('2021-09-13'),'Terrisa@gmail.com','A342014');
    console.log(newEmployeePayrollData1);

    let newEmployeePayrollData2=new EmployeePayrollData(3,"Terrisa",30000,"M",new Date('2021-09-13'),'Terrisa@gmail.com','342014B');
    console.log(newEmployeePayrollData2);

    let newEmployeePayrollData3=new EmployeePayrollData(2,"Terrisa",52,"m",new Date('2021-09-13'),'Terrisa@gmail.com','342 014');
    console.log(newEmployeePayrollData3);
}catch(e){
    console.error(e);
}