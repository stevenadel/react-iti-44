import { createSlice } from "@reduxjs/toolkit"

const name = createSlice({
    name: "name",
    initialState: "",
    reducers: {
        changeName: (state, action) => {
            return state = action.payload
        }
    }
})

export const { changeName } = name.actions

export default name.reducer
