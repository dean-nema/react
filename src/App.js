
import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState("dev");//
   const  showEmployees = 1;
return (
  <div className="App bg-red-300">
    {showEmployees ? 
      <>
      <input type="text" onChange={(e) => {
        // console.log(e.target.value);
        setRole(e.target.value);//e.target.value captures the value entered in the input
      }} />
      <Employee name = "Dean" role = "Intern"/>
      <Employee name = "Abby" role = {role}/>
      <Employee name = "John"/>
      
      </>
    : 
      <p>You can not see the employees</p>
    }
  </div>
);
}

export default App;
