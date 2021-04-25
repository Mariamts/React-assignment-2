import { NavLink } from 'react-router-dom';

import css from './navigation.module.css';

function Navigation(props) {
  return (
    <div className="row mt-5 mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName={css['active-class']}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/todos"
            exact
            activeClassName={css['active-class']}>
            Todos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/comments"
            activeClassName={css['active-class']}>
            Comments
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
