import { users } from "../data/users.js"
import EmployeeValidator from "../validationRules/employeeValidator.js";

export default class EmployeeService{
    constructor(){
        this.employess = [];
        this.errors = [];
        this.employeeValidator = new EmployeeValidator();
    }

    loadEmployee(){
        for (const user of users) {
            if (!this.employeeValidator.checkAgeIsNumber(user) && !this.employeeValidator.checkRequiredFields(user) && this.employeeValidator.checkIsEmployee(user)) {
                this.employess.push(user)   
            }  
        }
    }   

    addEmployee(user){
        if (!this.employeeValidator.checkAgeIsNumber(user) && !this.employeeValidator.checkRequiredFields(user) && this.employeeValidator.checkIsEmployee(user)) {
            this.employess.push(user)   
        }
    }

    listEmployee(){
        return this.employess
    }

    getEmployeeById(id){
        return this.employess.find(x=>x.id == id)
    }
    
    getEmployeeSorted(){
        return this.employess.sort((employee1, employee2)=>{
            if (employee1["firstName"] > employee2["firstName"]) {
                return 1;
            }
            else if(employee1["firstName"] === employee2["firstName"]){
                return 0;
            }
            else{
                return -1;
            }
        })
    }
}