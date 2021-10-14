import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { UiActions } from '../../store/uiSlice';
const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cartSlice.totalQuantity)

  const cartToggleHandler = () => {
    dispatch(UiActions.toggle())
  }


  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
