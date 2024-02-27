import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Creatpost from "./components/Creatpost"
import Postlist from "./components/Postlist"
import {useState} from "react"

import './App.css'

function App() {
const [selectedTab,setselectedTab]=useState("create post")
  return (

    <div className="mycontainer">
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}/>
      <div className="mycontent">
        <Header />
        {selectedTab==="home"? (<Postlist />): (<Creatpost />)}
        <Footer />
      </div>
    </div>

  )
}

export default App
