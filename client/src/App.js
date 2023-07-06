import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './FormHandle/Signup';
import Login from './FormHandle/Login';
import WelcomePage from './FormHandle/WelcomePage';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/Login' element={ <Login/>}/>
      <Route path="/Signup/Login" element={<Login/>} />
      <Route path="/Login/Signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
