
import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role, setRole] = useState("dev");//
  const [employees, setEmployees] = useState(
    [
      {
        name:"Dean",
        role:"Developer",
        img: require("./pictures/Rogue.png")
      },
      {
        name:"James",
        role:"Mage",
        img: require("./pictures/Mage.png")
      },
      {
        name:"John",
        role:"Hunter",
        img: require("./pictures/Hunter.jpg")
      },
      {
        name:"Charles",
        role:"Warrior",
        img: require("./pictures/Warrior.jpg")
      },
      {
        name:"Dani",
        role:"Troll",
        img: require("./pictures/Troll.jpg")
      },
      {
        name:"Anesu",
        role:"Hero",
        img: require("./pictures/Screenshot from 2023-03-17 14-21-14.png")
      }
    ]);
   const  showEmployees = 1;
return (
  <div className="App ">
    {showEmployees ? 
    <>
      <input type="text" onChange={(e) => {
        // console.log(e.target.value);
        setRole(e.target.value);//e.target.value captures the value entered in the input
      }} />
      <div className="flex flex-wrap justify-center" >
      {employees.map((employee)=>{
         return (<Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
         )
      })}
      </div>
    </>
    : 
      <p>You can not see the employees</p>
    }
  </div>
);
}

export default App;
