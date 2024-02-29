import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"
import PostlistProvider from "./store/post-list-store"

import './App.css'

function App() {
  return (
<PostlistProvider>
    <div className="mycontainer">
      <Sidebar />
      <div className="mycontent">
        <Header />
        {/* outlet for using router  */}
        <Outlet />
        <Footer />
      </div>
    </div>
</PostlistProvider>

  )
}

export default App
