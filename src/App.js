import './App.css';
import Dsp100 from './Screens/Dsp100';
import Dsp300 from './Screens/Dsp300';
import Home from './Screens/Home';
import ApplicationForm from './Screens/ApplicationForm';
import { Route, Routes } from 'react-router-dom';
import Congrat from './Screens/Congrat';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/dsp300' element={<Dsp300/>} />
        <Route path='/dsp100' element={<Dsp100/>} />
        <Route path='/apply' element={<ApplicationForm/>} />
        <Route path='/congrat' element={<Congrat/>} />
      </Routes>
      
    </div>
  );
}

export default App;
