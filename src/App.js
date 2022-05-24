import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/SignUp/SignUp';
import Users from './components/Users/Users';

function App() {
  return (
    <Routes>
      <Route path="testtask" element={<Navigation />}>
        <Route path="users" element={<Users />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
