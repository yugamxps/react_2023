import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import { useRoutes } from 'react-router-dom';
import UseMemo from './useMemo';
import NoteState from './context/notes/NoteState';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);
  return (
    <NoteState>
      <div>
        {routes}
        {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/usememo' element={<useMemo />} />
        <Route path='/cusmemo' element={<cusMemo />} />
      </Routes> */}
      </div>
    </NoteState>
  );
}

export default App;
