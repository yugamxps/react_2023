import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseMemo from './useMemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/usememo' element={<useMemo />} />
        <Route path='/cusmemo' element={<cusMemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
