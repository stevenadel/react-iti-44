import { Outlet, createBrowserRouter } from "react-router-dom"
import ProductList from "./pages/ProductList/ProductList"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import ErrorPage from "./pages/Error/Error"

function Layout() {
    return (
      <>
        <Outlet />
      </>
    );
  }

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
        {
            path: '/',
            element: <ProductList />,
        },
        {
            path: '/product/:productId',
            element: <ProductDetails />,
        }]
    }
])

export default router
