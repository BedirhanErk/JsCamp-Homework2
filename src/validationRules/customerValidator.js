import UserValidator from "./userValidator.js";

export default class CustomerValidator extends UserValidator{
    constructor(){
        super()
        this.errors = [];
    }

    checkIsCustomer(user){
        if (user.type == "customer") {
            return true
        }
        return false;
    }
}