import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth.js';
import PopUp from '../PopUp/PopUp.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Login from '../Login/Login.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import IconLogin from '../../images/icon/log-in-01.svg';
import IconLogout from '../../images/icon/log-out.svg';
import BurgerIcon from '../../images/icon/burger.svg';
import css from './Header.module.css';

const Header = () => {
  const { isAuth, name, logout } = useAuth();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
    }
  }, [isAuth]);

  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.headerNav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }>
          Home
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }>
          Teachers
        </NavLink>
        {isAuth ? (
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }>
            Favorites
          </NavLink>
        ) : null}
      </nav>
      <div className={css.headerSignup}>
        {isAuth ? (
          <>
            <button className={css.headerBtn} onClick={logout}>
              <img
                className={css.headerBtnIcon}
                src={IconLogout}
                alt="Icon Logout"
              />
              Log out
            </button>
            <p className={css.headerBtnReg}>{name}</p>
          </>
        ) : (
          <>
            <button
              className={css.headerBtn}
              type="button"
              onClick={() => setShowLoginPopup(true)}>
              <img
                className={css.headerBtnIcon}
                src={IconLogin}
                alt="Icon login"
              />
              Log in
            </button>
            <button
              className={`${css.headerBtn} ${css.headerBtnReg}`}
              type="button"
              onClick={() => setShowRegisterPopup(true)}>
              Registration
            </button>
          </>
        )}
      </div>
      <button
        className={css.burgerButton}
        onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
        <img src={BurgerIcon} alt="Icon Burger" />
      </button>
      {showBurgerMenu && (
        <BurgerMenu
          show={showBurgerMenu}
          onClose={() => setShowBurgerMenu(false)}
          setShowLoginPopup={setShowLoginPopup}
          setShowRegisterPopup={setShowRegisterPopup}
          logout={logout}
          isAuth={isAuth}
          name={name}
        />
      )}
      {showLoginPopup && (
        <PopUp setIsShowModal={setShowLoginPopup}>
          <Login />
        </PopUp>
      )}
      {showRegisterPopup && (
        <PopUp setIsShowModal={setShowRegisterPopup}>
          <SignUp />
        </PopUp>
      )}
    </header>
  );
};

export default Header;
