// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/DashboardLayaut';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Programas from './pages/dashboard/Programas';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            
            <Route path="divisiones" element={<Dashboard />} />
            <Route path="programas" element={<Programas />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
