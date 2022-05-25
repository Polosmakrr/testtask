import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

const Users = lazy(() => import('./components/Users/Users'));
const SignUp = lazy(() => import('./components/SignUp/SignUp'));
// const Succesfull = lazy(() => import('./components/Succesfull/Succesfull'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="testtask" element={<Navigation />}>
          <Route path="users" element={<Users />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="success" element={<Succesfull/>}/> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
