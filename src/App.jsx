import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Search from "./pages/Search"
import SingleGif from "./pages/SingleGif"
import Favorites from "./pages/Favorites"
import GifProvider from "./context/gif-context"

const router = createBrowserRouter([
    {
        element: <AppLayout />,

        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:category",
                element: <Categories />,
            },
            {
                path: "/search/:query",
                element: <Search />,
            },
            {
                path: "/:type/:slug",
                element: <SingleGif />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
        ],
    },
])

const App = () => {
    return (
        <GifProvider>
            <RouterProvider router={router} />
        </GifProvider>
    )
}

export default App
