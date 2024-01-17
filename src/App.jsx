import { BrowserRouter as Router,Routes,Route,  } from "react-router-dom"
import About from "./pages/About"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Interests from "./pages/Interests"
import Skills from "./pages/Skills"
import Awards from "./pages/Awards"
// import Sidebar from "./components/Sidebar"
import Sidebar from "./components/sidebar/Sidebar"
import "./app.scss"



function App() {
  
  return (
    <Router>
      <Sidebar/> 
     <Routes>
      {/* <Route className="app" path="/" element={<Sidebar/>}/> */}
      <Route path="/" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/interest" element={<Interests/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/awards" element={<Awards/>}/>
     </Routes>
    </Router>  
  )
}

export default App
