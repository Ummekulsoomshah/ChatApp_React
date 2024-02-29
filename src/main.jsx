import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Creatpost from './components/Creatpost.jsx'
import Postlist from './components/Postlist.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Postlist/>},
      {path:"/create-post", element:<Creatpost/>}
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      
  </React.StrictMode>,
)
