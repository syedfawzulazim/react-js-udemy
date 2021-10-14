import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cartSlice';
import Notification from './components/UI/Notification';

let firstTime = true;

function App() {
  const show = useSelector(state => state.uiSlice.cartIsVisible)
  const cart = useSelector(state => state.cartSlice)
  const notification = useSelector(state => state.uiSlice.notification)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    // const sendCartData = async () => {
    //   dispatch(UiActions.showNotification({
    //     status: 'Pending',
    //     title: "Sending",
    //     message: 'Sending Cart Data'
    //   }))

    //   const response = await fetch('https://foodcart-56fe6-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   })


    //   if (!response.ok) {
    //     throw new Error('Sending Cart data failed!')
    //   }

    //   dispatch(UiActions.showNotification({
    //     status: 'success',
    //     title: "Success!",
    //     message: 'Sent Cart Data Successfully'
    //   }))


    // }

    if (firstTime) {
      firstTime = false;
      return;
    }

    // sendCartData().catch(error => {
    //   dispatch(UiActions.showNotification({
    //     status: 'error',
    //     title: "Error",
    //     message: 'Sending Cart Data Failed'
    //   }))
    // })

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }


  }, [cart, dispatch])


  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
