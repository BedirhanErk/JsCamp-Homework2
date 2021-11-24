import UserValidator from "./userValidator.js";

export default class EmployeeValidator extends UserValidator{
    constructor(){
        super();
        this.errors = [];
    }

    checkIsEmployee(user){
        if (user.type == "employee") {
            return true;
        }
        return false;
    }
}