import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

const initialAuthState = {
    isAuthenticated: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;