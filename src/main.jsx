import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer.jsx'
import WatchPage from './components/WatchPage.jsx'
import SearchResults from './components/SearchResults.jsx'
import { Provider } from 'react-redux'
import store from "./Redux/Store.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/search_Query", element: <SearchResults /> },
      { path: "/playlist", element: <h1>About</h1> },
      { path: "/liked", element: <h1>Contact</h1> },
      { path: "profile", element: <h1>Not Found</h1> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router } />
    </Provider>

  </React.StrictMode>,
)
