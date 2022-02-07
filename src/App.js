import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import ArtContainer from './ArtContainer'
import BakingContainer from './BakingContainer'
import CodeContainer from './CodeContainer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home />} >
            {/* <Home/> */}
          </Route>
          <Route exact path="/art">
            <ArtContainer/>
          </Route>
          <Route exact path="/baking">
            <BakingContainer/>
          </Route>
          <Route exact path="/code">
            <CodeContainer/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
