import { createSlice } from "@reduxjs/toolkit"

const password = createSlice({
    name: "password",
    initialState: "",
    reducers: {
        changePassword: (state, action) => {
            return state = action.payload
        }
    }
})

export const { changePassword } = password.actions

export default password.reducer
