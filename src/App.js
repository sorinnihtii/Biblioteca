import "./index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Carti from "./Carti"
import Cititori from "./Cititori"
import NotFound from "./NotFound"
import InsertCarte from "./InsertCarte"
import InsertCititor from "./InsertCititor"
import UpdateCarte from "./UpdateCarte"
import UpdateCititor from "./UpdateCititor"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/carti">
            <Carti />
          </Route>
          <Route exact path="/cititori">
            <Cititori />
          </Route>
          <Route exact path="/insertCarte">
            <InsertCarte />
          </Route>
          <Route exact path="/insertCititor">
            <InsertCititor />
          </Route>
          <Route path="/updateCarte/:id">
            <UpdateCarte />
          </Route>
          <Route path="/updateCititor/:id">
            <UpdateCititor />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
