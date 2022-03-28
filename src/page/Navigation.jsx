import { Link, NavLink, Outlet } from 'react-router-dom';
import './Navigation.scss';

export function Navigation() {
  return (
    <div>
      <header className="header">
        <div className="conteiner header-conteiner">
          <nav className="nav">
            <Link to="/" className="logo">
              <span className="logo__accent">Web</span>Studio
            </Link>

            <ul className="main-nav list">
              <li className="main-nav__item">
                <NavLink to="/" className=" link main-nav__link">
                  Студия
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink to="/portfolio" className="link main-nav__link">
                  Портфолио
                </NavLink>
              </li>
              <li className="main-nav__item">
                <Link to="#" className="link main-nav__link">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="list menu-connect">
            <li className="menu-connect__list">
              <a
                className="link menu-connect__link"
                href="mailto:info@devstudio.com"
              >
                <svg
                  width="16"
                  height="12"
                  className="menu-connect__icon transition"
                >
                  <use href="./images/icon/symbol-defs.svg#icon-envelope"></use>
                </svg>
                info@devstudio.com
              </a>
            </li>
            <li className="menu-connect__list">
              <a className="link menu-connect__link" href="tel:+380961111111">
                <svg
                  width="10"
                  height="16"
                  className="menu-connect__icon transition"
                >
                  <use href="./images/icon/symbol-defs.svg#icon-smartphone"></use>
                </svg>
                +38 096 111 11 11
              </a>
            </li>
          </ul>
          {/* <button type="button" className="menu-mobile-btn" data-menu-open>
            <svg className="" width="24" height="16">
              <use href="./images/icon/symbol-defs.svg#icon-menu"></use>
            </svg>
          </button> */}
        </div>
      </header>
      <Outlet />
    </div>
  );
}
