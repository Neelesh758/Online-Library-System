
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import BrowseBooksList from './Components/BrowseBooksList.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import AddBook from './Components/AddBook.jsx'
import Home from './Components/Home.jsx'
import BookDetails from './Components/BookDetails.jsx'
let appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/BrowseBooksList',
        element:<BrowseBooksList />
      },
      {
        path:'/addBook',
        element:<AddBook />
      },
      {
        path:'/BrowseBooksList/:id',
        element:<BookDetails />
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
