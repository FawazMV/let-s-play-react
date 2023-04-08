import { createSlice } from '@reduxjs/toolkit'
const TurfAuthSlice = createSlice({
    name: 'turfAuth',
    initialState: {
        token: null
    },
    reducers: {
        setTurfAuth: (state, action) => {
            state.token = action.payload;
        },
        removeTurfToken: (state) => {
            state.token = null
        }
    }

})

export const { setTurfAuth, removeTurfToken } = TurfAuthSlice.actions
export default TurfAuthSlice.reducer
