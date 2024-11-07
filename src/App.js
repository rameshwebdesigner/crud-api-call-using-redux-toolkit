import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Read';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Create />}></Route>
          <Route exact path='/read' element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
