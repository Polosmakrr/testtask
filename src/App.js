import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

const Users = lazy(() => import('./components/Users/Users'));
const SignUp = lazy(() => import('./components/SignUp/SignUp'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="testtask" element={<Navigation />}>
          <Route path="users" element={<Users />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
