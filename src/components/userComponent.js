import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import Customer from "../models/customer.js";
import UserService from "../services/userService.js";

// console.log("User component yüklendi")

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

// let user1 = new User(1, "Bedirhan", "Erkılıç", "Yozgat")
// let user2 = new User(2, "Engin", "Demiroğ", "Ankara")
// userService.add(user1);
// userService.add(user2);

// console.log(userService.list())
// console.log(userService.getById(1))



let customer = {id:1, firstName:"Bedirhan"}
//Prototyping
customer.lastName = "Erkılıç"
// console.log(customer.lastName)

userService.load()
console.log(userService.customers)
console.log(userService.employess)
console.log(userService.errors)

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Antalya", "21a", "123456")
customerToAdd.type = "customer"
userService.add(customerToAdd)

console.log(userService.getCustomersSorted())