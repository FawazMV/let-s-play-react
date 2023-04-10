import { createSlice } from '@reduxjs/toolkit'
const AdminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState: {
        token: null
    },
    reducers: {
        setAdminToken: (state, action) => {
            state.token = action.payload;
        },
        removeAdminToken: (state) => {
            state.token = null
        }
    }

})

export const { setAdminToken, removeAdminToken } = AdminAuthSlice.actions
export default AdminAuthSlice.reducer
