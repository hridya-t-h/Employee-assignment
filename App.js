import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}


export default App;
