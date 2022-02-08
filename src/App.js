import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import ArtContainer from './ArtContainer'
import BakingContainer from './BakingContainer'
import CodeContainer from './CodeContainer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/art" element={<ArtContainer/>}></Route>
          <Route exact path="/baking" element={<BakingContainer/>}></Route>
          <Route exact path="/code" element={<CodeContainer/>}></Route>
        </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
