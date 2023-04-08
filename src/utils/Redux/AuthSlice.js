import { createSlice } from '@reduxjs/toolkit'
const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null
        }
    }

})

export const { setToken, removeToken } = AuthSlice.actions
export default AuthSlice.reducer
