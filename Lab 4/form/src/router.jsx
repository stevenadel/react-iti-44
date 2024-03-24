import { createBrowserRouter } from "react-router-dom"
import Register from "./pages/Register"
import FormResults from "./pages/FormResults"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />
    },
    {
        path: "/results",
        element: <FormResults />
    }
  ])

export default router