/*
   Modules

--> import
--> export

let mixed the all files in one file

if write in html file you should use like this:- <scipt type="module" src= file Name ></script>
*/

import { Employee } from "./employee/Employee.js";
import { Customer } from "./customer/Customer.js";

let employee = new Employee ('Shankar','Yerra',22,'software developer');
employee.greet();


let customer = new Customer ('Saketh','Yerra',1,'andhra pradesh');
customer.greet();