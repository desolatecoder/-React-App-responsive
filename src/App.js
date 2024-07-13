import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Service from './Components/Service';
import Project from './Components/Project';
import Contactus from './Components/Contactus';
import Mentorship from './Components/Mentorship';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Header from './Components/Header';
function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Service" element={<Service />}/>
        <Route path="/Project" element={<Project />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Mentorship" element={<Mentorship />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
