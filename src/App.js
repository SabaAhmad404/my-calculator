import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" Component={Calculator}/>

      </Routes>
         
      
    </div>
  );
}

export default App;
