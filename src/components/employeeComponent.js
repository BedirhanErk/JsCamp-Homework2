import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService();

employeeService.loadEmployee()
//List Employee
console.log(employeeService.employess)
//List Error
console.log(employeeService.errors)
//Add Employee
let employeeToAdd = new Employee(7, "Seda", "Yılmaz", "Antalya", "21a", "123456")
employeeToAdd.type = "employee"
employeeService.addEmployee(employeeToAdd)
//List Employee
console.log(employeeService.listEmployee())
//Get One Employee
console.log(employeeService.getEmployeeById(3))
//Sort Employee
console.log(employeeService.getEmployeeSorted())