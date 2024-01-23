
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard'
import Login from './Pages/auth/Login';
import Sidebar from './component/Sidebar';
function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route exact path='/' element={<Login/>}></Route>

        <Route path='/dashboard' element={
          <Sidebar>
            < Dashboard />
          </Sidebar>
       } ></Route>

</Routes>


    </div>
  );
}

export default App;
