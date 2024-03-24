import { createSlice } from "@reduxjs/toolkit"

const image = createSlice({
    name: "image",
    initialState: null,
    reducers: {
        changeImage: (state, action) => {
            return state = action.payload
        }
    }
})

export const { changeImage } = image.actions

export default image.reducer
