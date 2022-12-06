import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Tasks from './components/Task/Tasks'
import Navbar from './components/Navbar/navbar.js'


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tasks />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
