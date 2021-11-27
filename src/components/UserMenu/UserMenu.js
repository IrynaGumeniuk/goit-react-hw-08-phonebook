import { useDispatch, useSelector } from 'react-redux';
import defaultImg from './default-avatar.png';
import { authSelector } from '../../redux/auth/auth-selectors';
import s from '../UserMenu/UserMenu.module.css';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  const avatar = defaultImg;

  return (
    <div className={s.wrapper}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <button
        type="button"
        className={s.submit}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
