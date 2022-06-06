import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {About} from './pages/About'
import {Home} from './pages/Home'
import {Catalog} from './pages/Catalog'

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route exact path='/About Us' element={ <About /> } />
          <Route exact path='/Catalog' element={ <Catalog /> } />
          <Route exact path='/' element={ <Home /> }/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
