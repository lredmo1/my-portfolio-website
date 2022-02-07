import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import ArtContainer from 'ArtContainer'
import BakingContainer from 'BakingContainer'
import CodeContainer from 'CodeContainer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
