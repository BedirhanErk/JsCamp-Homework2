import { users } from "../data/users.js"
import DataError from  "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employess = [];
        this.customers = [];
        this.errors = [];
        this.loggerService = loggerService;
    }

    load(){
        for (const user of users) {
            if (user.type == "customer") {
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }             
            }
            else if (user.type == "employee") {
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employess.push(user)   
                }
            }
            else{
                this.errors.push(new DataError("Wrong user type",user))
            }    
        }
    }
    
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                    this.errors.push(new DataError(`Validation problem ${field} is required`,user))
            }
        }
        //Her fonksiyonun tek bir işlevi olmalı
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem ${field} is required`,user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    add(user){
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }  
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employess.push(user)   
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type",user))
                break;
        }
        // this.loggerService.log(user)
    }

    //Her işlem farklı bir serviste olmalı
    listCustomers(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(x=>x.id == id)
    }
    
    //customer1.firstName bunun yerine
    //customer1["firstName"] böyle dinamik yap
    getCustomersSorted(){
        return this.customers.sort((customer1, customer2)=>{
            if (customer1.firstName > customer2.firstName) {
                return 1;
            }
            else if(customer1.firstName === customer2.firstName){
                return 0;
            }
            else{
                return -1;
            }
        })
    }
}