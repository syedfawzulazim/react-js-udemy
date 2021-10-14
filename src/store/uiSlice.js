import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartIsVisible: false,
    notification: null
}

const UISlice = createSlice({
    name: 'uiSlice',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const UiActions = UISlice.actions;
export default UISlice;