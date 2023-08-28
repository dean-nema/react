import '../index.css';
import Employee from '../components/employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/header';
function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
        id:1,
        name:"Dean",
        role:"Developer",
        img: require("../pictures/Rogue.png")
      },
      {
        id:2,
        name:"James",
        role:"Mage",
        img: require("../pictures/Mage.png")
      },
      {
        id:3,
        name:"John",
        role:"Hunter",
        img: require("../pictures/Hunter.jpg")
      },
      {
        id:4,
        name:"Charles",
        role:"Warrior",
        img: require("../pictures/Warrior.jpg")
      },
      {
        id:5,
        name:"Dani",
        role:"Troll",
        img: require("../pictures/Troll.jpg")
      },
      {
        id:6,
        name:"Anesu",
        role:"Hero",
        img: require("../pictures/Screenshot from 2023-03-17 14-21-14.png")
      }
    ]);
    function updateEmployee(id,newName, newRole){
      let updatedEmployees = employees.map((employee)=>{
          if(id === employee.id){
             return {...employee, name:newName, role:newRole}
          }
          return employee;
      });
      setEmployees(updatedEmployees);
    }
    function newEmployee(name, role, img){
      let newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: require('../pictures/'+img+'.png')
      }
      setEmployees([...employees, newEmployee])
    }
   const  showEmployees = 1;
return (
  <div className="App bg-gray-300 min-h-screen ">
   
    {showEmployees ? 
    <>
      <div className="flex flex-wrap justify-center m-y-2" >
      {employees.map((employee)=>{
        const editEmployee = ( 
        <EditEmployee 
        id={employee.id}
        name={employee.name}
        role={employee.role} 
        updateEmployee={updateEmployee}
        />
        );
           return (<Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
           editEmployee = {editEmployee}
          />
         )
      })}
      </div>
      <AddEmployee newEmployee = {newEmployee}/>
    </>
    : 
      <p>You can not see the employees</p>
    }
  </div>
);
}

export default Employees;
