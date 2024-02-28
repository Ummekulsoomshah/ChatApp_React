import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Creatpost from "./components/Creatpost"
import Postlist from "./components/Postlist"
import {useState} from "react"
import PostlistProvider from "./store/post-list-store"

import './App.css'

function App() {
const [selectedTab,setselectedTab]=useState("create post")
  return (
<PostlistProvider>
    <div className="mycontainer">
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}/>
      <div className="mycontent">
        <Header />
        {selectedTab==="home"? (<Postlist />): (<Creatpost />)}
        <Footer />
      </div>
    </div>
</PostlistProvider>

  )
}

export default App
