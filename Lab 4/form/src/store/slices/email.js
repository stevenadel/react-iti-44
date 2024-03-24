import { createSlice } from "@reduxjs/toolkit"

const email = createSlice({
    name: "email",
    initialState: "",
    reducers: {
        changeEmail: (state, action) => {
            return state = action.payload
        }
    }
})

export const { changeEmail } = email.actions

export default email.reducer
