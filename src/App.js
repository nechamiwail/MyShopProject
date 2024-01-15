import { React } from 'react';
import './App.css';
import List from './List';
import Order from './Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/Order' element={<Order/>} />
        </Routes>
        <List/>
    </div>
  );
}

export default App;
