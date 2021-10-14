import { createSlice } from "@reduxjs/toolkit";
import { UiActions } from "./uiSlice";
const inisitalCartState = {
    items: [],
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: inisitalCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItems(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;

            }
        },
        removeItems(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UiActions.showNotification({
            status: 'Pending',
            title: "Sending",
            message: 'Sending Cart Data'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://foodcart-56fe6-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
            })

            if (!response.ok) {
                throw new Error('Sending Cart data failed!')
            }
        }

        try {
            await sendRequest()

            dispatch(UiActions.showNotification({
                status: 'success',
                title: "Success!",
                message: 'Sent Cart Data Successfully'
            }))
        } catch (error) {

            dispatch(UiActions.showNotification({
                status: 'error',
                title: "Error",
                message: 'Sending Cart Data Failed'
            }))

        }



    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://foodcart-56fe6-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Fetching data failed')
            }
            const data = await response.json()
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(UiActions.showNotification({
                status: 'error',
                title: "Error",
                message: 'Sending Cart Data Failed'
            }))
        }
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice;