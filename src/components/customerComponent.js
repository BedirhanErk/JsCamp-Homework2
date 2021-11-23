import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService();

customerService.loadCustomer()
//List Customer
console.log(customerService.customers)
//List Error
console.log(customerService.errors)
//Add Customer
let customerToAdd = new Customer(7, "Seda", "Yılmaz", "Antalya", "21a", "123456")
customerToAdd.type = "customer"
customerService.addCustomer(customerToAdd)
//List Customer
console.log(customerService.listCustomer())
//Get One Customer
console.log(customerService.getCustomerById(1))
//Sort Customer
console.log(customerService.getCustomerSorted())