import Postlist from "./components/Postlist"
import Creatpost from "./components/Creatpost"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="mycontainer">
        <Sidebar />
        <div className="mycontent">
          <Header />
          <Routes>
            <Route path="/" element={<Postlist />}/>
            <Route path="create-post" element={<Creatpost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
