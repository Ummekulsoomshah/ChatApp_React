import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Creatpost, { creatPostaction } from './components/Creatpost.jsx'
import Postlist , {postLoader} from './components/Postlist.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Postlist/>,loader:postLoader},
      {path:"/create-post", element:<Creatpost/>, action:creatPostaction} 
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      
  </React.StrictMode>,
)
