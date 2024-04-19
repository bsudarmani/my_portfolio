import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/signup' element={<Signup/>} ></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
