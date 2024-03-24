import { configureStore } from "@reduxjs/toolkit"
import name from "./slices/name"
import email from "./slices/email"
import password from "./slices/password"
import image from "./slices/image"

export default configureStore({
    reducer: {
        name,
        email,
        password,
        image
    },
})
