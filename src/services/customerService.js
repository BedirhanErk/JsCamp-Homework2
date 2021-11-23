import { users } from "../data/users.js"
import CustomerValidator from "../validationRules/customerValidator.js";

export default class CustomerService{
    constructor(){
        this.customers = [];
        this.errors = [];
        this.customerValidator = new CustomerValidator();
    }

    loadCustomer(){
        for (const user of users) {
            if (!this.customerValidator.checkAgeIsNumber(user) && !this.customerValidator.checkRequiredFields(user) && this.customerValidator.checkIsCustomer(user)) {
                this.customers.push(user)   
            }  
        }
    }   

    addCustomer(user){
        if (!this.customerValidator.checkAgeIsNumber(user) && !this.customerValidator.checkRequiredFields(user) && this.customerValidator.checkIsCustomer(user)) {
            this.customers.push(user)   
        }
    }

    listCustomer(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(x=>x.id == id)
    }
    
    getCustomerSorted(){
        return this.customers.sort((customer1, customer2)=>{
            if (customer1["firstName"] > customer2["firstName"]) {
                return 1;
            }
            else if(customer1["firstName"] === customer2["firstName"]){
                return 0;
            }
            else{
                return -1;
            }
        })
    }
}