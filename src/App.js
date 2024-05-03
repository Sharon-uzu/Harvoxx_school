import './App.css';
import Dsp100 from './Screens/Dsp100';
import Dsp300 from './Screens/Dsp300';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/dsp300' element={<Dsp300/>} />
        <Route path='/dsp100' element={<Dsp100/>} />

      </Routes>
      
    </div>
  );
}

export default App;
