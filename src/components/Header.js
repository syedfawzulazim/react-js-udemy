import { useSelector, useDispatch } from 'react-redux'
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {

  const authState = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {authState && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
