
import './App.css';
import Employee from './components/employee';

function App() {
   console.log('we are about to list the employees');
   const  showEmployees = 0;
return (
  <div className="App">
    {showEmployees ? 
      <>
      <Employee/>
      <Employee/>
      <Employee/>
      <Employee/>
      </>
    : 
      <p>You can not see the employees</p>
    }
  </div>
);
}

export default App;
