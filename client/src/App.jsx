import "./App.css";
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
 import {Toaster} from 'react-hot-toast'
import Home from "./pages/Home";
import Sucess from "./pages/Sucess";
import Notfound from "./pages/Notfound";
function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/success" element={<Sucess />}/>
        <Route path="*" element={<Notfound />}/>

      </Routes>
      <Toaster />
    </Router>
  </>;
}

export default App;
