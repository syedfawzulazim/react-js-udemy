import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        uiSlice: UISlice.reducer,
        cartSlice: cartSlice.reducer
    }
})

export default store