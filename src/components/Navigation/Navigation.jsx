import { Outlet, useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Logo from '../../picture/svg/logo.svg';

const Navigation = () => {
  const navigate = useNavigate();

  const onUsers = () => {
    navigate('users');

    setTimeout(() => {
      window.scrollTo({ top: document.body.clientHeight / 2, behavior: 'smooth' });
    }, 500);
  };

  const onSignUp = () => {
    navigate('signup');

    setTimeout(() => {
      window.scrollTo({ top: document.body.clientHeight / 2, behavior: 'smooth' });
    }, 500);
  };

  return (
    <>
      <header>
        <div className="header_block"></div>
        <nav className="nav_container">
          <div className="container nav">
            <a className="nav_logo" href="/testtask">
              <img src={Logo} alt="logo" />
            </a>
            <div className="nav_buttons">
              <button className="nav_buttons-item btn" onClick={onUsers}>
                Users
              </button>
              <button className="nav_buttons-item btn" onClick={onSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>
      <Hero />
      <Outlet />
    </>
  );
};

export default Navigation;
